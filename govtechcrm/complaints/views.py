from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from django.http import HttpResponse, JsonResponse
from django.db.models import Count, Q
from django.utils import timezone
from datetime import timedelta
import csv

from .forms import ComplaintForm, UserRegisterForm
from .models import Complaint, UserProfile, Notification, Message
import json

# Try importing GoogleTranslator, provide graceful fallback if offline
try:
    from deep_translator import GoogleTranslator
except Exception:
    GoogleTranslator = None


# 🇮🇳 Helper: Auto-assign Department Authority based on category
def get_authority_for_category(category):
    authorities = {
        'water': 'Delhi Jal Board / State Water Resources Department',
        'electricity': 'State Electricity Board & Power Distribution Corp',
        'roads': 'Public Works Department (PWD) & NHAI',
        'sanitation': 'Municipal Corporation Sanitation Division',
        'health': 'Directorate of Health Services & Civil Hospitals',
        'revenue': 'Revenue Department & District Collectorate',
        'education': 'Department of School Education & Literacy',
        'other': 'Department of Public Grievances (General Admin)'
    }
    return authorities.get(category, 'Department of Public Grievances')


# 🇮🇳 Helper: Translate text safely
def safe_translate(text, source_lang):
    if not text or not source_lang or source_lang.lower() == 'english':
        return text
    if GoogleTranslator:
        try:
            lang_code_map = {
                'hindi': 'hi',
                'sanskrit': 'sa',
                'tamil': 'ta',
                'telugu': 'te',
                'marathi': 'mr',
                'bengali': 'bn',
            }
            code = lang_code_map.get(source_lang.lower(), source_lang)
            return GoogleTranslator(source=code, target='en').translate(text)
        except Exception:
            return f"[Original - {source_lang.capitalize()}]: {text}"
    return text


# ✅ Unified Home / Welcome View
def home(request):
    total_complaints = Complaint.objects.count()
    resolved_complaints = Complaint.objects.filter(status='Resolved').count()
    pending_complaints = Complaint.objects.filter(status='Pending').count()
    in_progress = Complaint.objects.filter(status='In Progress').count()

    resolution_rate = int((resolved_complaints / total_complaints * 100)) if total_complaints > 0 else 92

    context = {
        'total_complaints': total_complaints,
        'resolved_complaints': resolved_complaints,
        'pending_complaints': pending_complaints,
        'in_progress': in_progress,
        'resolution_rate': resolution_rate,
    }
    return render(request, "homepage.html", context)


# ✅ User Registration View
def register(request):
    if request.user.is_authenticated:
        if getattr(request.user, 'is_staff', False) or (hasattr(request.user, 'profile') and request.user.profile.role == 'admin'):
            return redirect('admin_dashboard')
        return redirect('citizen_dashboard')

    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            auth_login(request, user)
            messages.success(request, f"Namaste {user.first_name or user.username}! Your account has been registered successfully.")
            if hasattr(user, 'profile') and user.profile.role == 'admin':
                return redirect('admin_dashboard')
            return redirect('citizen_dashboard')
        else:
            messages.error(request, "Please correct the errors below to complete registration.")
    else:
        form = UserRegisterForm()

    return render(request, "register.html", {"form": form})


# ✅ User Login View
def login_view(request):
    if request.user.is_authenticated:
        if getattr(request.user, 'is_staff', False) or (hasattr(request.user, 'profile') and request.user.profile.role == 'admin'):
            return redirect('admin_dashboard')
        return redirect('citizen_dashboard')

    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        selected_role = request.POST.get('role', 'citizen')

        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                auth_login(request, user)
                
                # Check profile or staff status
                user_role = 'citizen'
                if hasattr(user, 'profile'):
                    user_role = user.profile.role
                elif user.is_staff or user.is_superuser:
                    user_role = 'admin'

                messages.success(request, f"Welcome back, {user.first_name or user.username}!")
                
                if user_role == 'admin' or user.is_staff or selected_role == 'admin':
                    return redirect('admin_dashboard')
                return redirect('citizen_dashboard')
            else:
                messages.error(request, "Invalid Login ID or Password.")
        else:
            messages.error(request, "Invalid credentials. Please verify your ID and password.")
    else:
        form = AuthenticationForm()

    return render(request, "login.html", {"form": form})


# ✅ 1-Click Demo Login
def demo_login(request, role):
    if role == 'admin':
        user, created = User.objects.get_or_create(
            username='admin',
            defaults={'first_name': 'Rajesh', 'last_name': 'Sharma', 'email': 'admin@govtech.gov.in', 'is_staff': True, 'is_superuser': True}
        )
        if created:
            user.set_password('admin123')
            user.save()
        UserProfile.objects.update_or_create(
            user=user,
            defaults={'role': 'admin', 'department': 'Public Grievance Redressal Cell', 'mobile': '9810012345', 'district': 'Central Delhi'}
        )
        auth_login(request, user)
        messages.info(request, "Logged in as Demo Grievance Redressal Administrator.")
        return redirect('admin_dashboard')
    else:
        user, created = User.objects.get_or_create(
            username='citizen_demo',
            defaults={'first_name': 'Aarav', 'last_name': 'Verma', 'email': 'aarav.citizen@example.in'}
        )
        if created:
            user.set_password('citizen123')
            user.save()
        UserProfile.objects.update_or_create(
            user=user,
            defaults={'role': 'citizen', 'mobile': '9876543210', 'address': '42, Shanti Kunj, Civil Lines', 'district': 'North Delhi'}
        )
        auth_login(request, user)
        messages.info(request, "Logged in as Demo Citizen (Aarav Verma).")
        return redirect('citizen_dashboard')


# ✅ Logout View
def logout_view(request):
    auth_logout(request)
    messages.info(request, "You have been logged out successfully. Dhanyavaad!")
    return redirect('home')


# ✅ Citizen / User Dashboard
def citizen_dashboard(request):
    # Auto log-in demo user if not logged in
    if not request.user.is_authenticated:
        return redirect('login')

    user = request.user
    user_notifications = Notification.objects.filter(user=user)
    unread_count = user_notifications.filter(is_read=False).count()
    notifications = user_notifications.order_by('-created_at')[:10]

    # User complaints or all complaints if admin viewing
    if user.is_staff or (hasattr(user, 'profile') and user.profile.role == 'admin'):
        complaints = Complaint.objects.all().order_by('-created_at')
    else:
        # User complaints or complaints with user's name/email fallback
        complaints = Complaint.objects.filter(
            Q(user=user) | Q(name__iexact=user.get_full_name()) | Q(name__iexact=user.username)
        ).order_by('-created_at')

    # Handle New Complaint Submission
    if request.method == "POST":
        form = ComplaintForm(request.POST, request.FILES)
        if form.is_valid():
            complaint = form.save(commit=False)
            complaint.user = user
            complaint.assigned_authority = get_authority_for_category(complaint.category)
            
            # Safe auto-translation
            complaint.translated_text = safe_translate(complaint.complaint_text, complaint.language)
            complaint.save()

            # Create notification
            Notification.objects.create(
                user=user,
                complaint=complaint,
                title=f"Grievance #{complaint.id} Registered Successfully",
                message=f"Your grievance '{complaint.title}' has been routed to {complaint.assigned_authority}. Expected resolution target: {complaint.sla_days} days."
            )

            messages.success(request, f"Grievance #{complaint.id} successfully registered! Assigned to {complaint.assigned_authority}.")
            return redirect('track_complaint', complaint_id=complaint.id)
        else:
            messages.error(request, "Please check the form fields and try again.")
    else:
        initial_data = {
            'name': user.get_full_name() or user.username,
            'location': getattr(user.profile, 'district', '') if hasattr(user, 'profile') else 'Central District'
        }
        form = ComplaintForm(initial=initial_data)

    # Stats for citizen
    total_count = complaints.count()
    pending_count = complaints.filter(status='Pending').count()
    in_progress_count = complaints.filter(status='In Progress').count()
    resolved_count = complaints.filter(status='Resolved').count()

    context = {
        'form': form,
        'complaints': complaints,
        'notifications': notifications,
        'unread_count': unread_count,
        'total_count': total_count,
        'pending_count': pending_count,
        'in_progress_count': in_progress_count,
        'resolved_count': resolved_count,
    }
    return render(request, "citizen_dashboard.html", context)


# ✅ Admin Dashboard
def admin_dashboard(request):
    # Ensure authenticated & admin role
    if not request.user.is_authenticated:
        return redirect('login')
    
    # Query parameters for filtering
    category_filter = request.GET.get('category', '')
    status_filter = request.GET.get('status', '')
    location_filter = request.GET.get('location', '')
    sla_filter = request.GET.get('sla', '')
    search_query = request.GET.get('q', '')

    complaints_qs = Complaint.objects.all().order_by('-created_at')

    if category_filter:
        complaints_qs = complaints_qs.filter(category=category_filter)
    if status_filter:
        complaints_qs = complaints_qs.filter(status=status_filter)
    if location_filter:
        complaints_qs = complaints_qs.filter(location__icontains=location_filter)
    if search_query:
        complaints_qs = complaints_qs.filter(
            Q(title__icontains=search_query) |
            Q(complaint_text__icontains=search_query) |
            Q(name__icontains=search_query) |
            Q(id__icontains=search_query)
        )

    # Evaluate SLA filter in Python because SLA is dynamic
    complaints = list(complaints_qs)
    if sla_filter:
        if sla_filter == 'breached':
            complaints = [c for c in complaints if c.sla_status == 'breached']
        elif sla_filter == 'approaching':
            complaints = [c for c in complaints if c.sla_status == 'approaching']
        elif sla_filter == 'on_track':
            complaints = [c for c in complaints if c.sla_status == 'on_track']

    # Aggregated metrics
    all_complaints = Complaint.objects.all()
    total_complaints = all_complaints.count()
    pending_count = all_complaints.filter(status='Pending').count()
    in_progress_count = all_complaints.filter(status='In Progress').count()
    resolved_count = all_complaints.filter(status='Resolved').count()
    
    sla_breaches = sum(1 for c in all_complaints if c.sla_status == 'breached')
    sla_compliance = int(((total_complaints - sla_breaches) / total_complaints * 100)) if total_complaints > 0 else 100

    # Chart data
    category_data = list(all_complaints.values('category').annotate(count=Count('id')))
    status_data = list(all_complaints.values('status').annotate(count=Count('id')))
    priority_data = list(all_complaints.values('priority').annotate(count=Count('id')))

    context = {
        'complaints': complaints,
        'total_complaints': total_complaints,
        'pending_count': pending_count,
        'in_progress_count': in_progress_count,
        'resolved_count': resolved_count,
        'sla_breaches': sla_breaches,
        'sla_compliance': sla_compliance,
        'category_data': category_data,
        'status_data': status_data,
        'priority_data': priority_data,
        'current_category': category_filter,
        'current_status': status_filter,
        'current_location': location_filter,
        'current_sla': sla_filter,
        'search_query': search_query,
    }
    return render(request, "admin_dashboard.html", context)


# ✅ Complaint Status & Remarks Update View
def update_status(request, complaint_id):
    complaint = get_object_or_404(Complaint, id=complaint_id)
    if request.method == "POST":
        new_status = request.POST.get('status', complaint.status)
        admin_remarks = request.POST.get('admin_remarks', '')
        assigned_authority = request.POST.get('assigned_authority', complaint.assigned_authority)

        complaint.status = new_status
        if admin_remarks:
            complaint.admin_remarks = admin_remarks
        if assigned_authority:
            complaint.assigned_authority = assigned_authority
        complaint.save()

        # Send notification to complaint creator if user exists
        if complaint.user:
            Notification.objects.create(
                user=complaint.user,
                complaint=complaint,
                title=f"Update on Grievance #{complaint.id}",
                message=f"Your grievance status has been updated to '{new_status}'. Remarks: {admin_remarks or 'Authority is actively processing your request.'}"
            )

        messages.success(request, f"Grievance #{complaint.id} status updated to {new_status}.")
    
    # Redirect back to referring page or admin dashboard
    next_url = request.POST.get('next') or request.META.get('HTTP_REFERER') or 'admin_dashboard'
    return redirect(next_url)


# ✅ Track Complaint View
def track_complaint(request, complaint_id=None):
    if complaint_id is None:
        query_id = request.GET.get('id')
        if query_id:
            try:
                complaint = Complaint.objects.get(id=int(query_id))
                return render(request, "complaints/track.html", {"complaint": complaint})
            except (ValueError, Complaint.DoesNotExist):
                messages.error(request, f"Grievance ID #{query_id} not found in our database.")
                return render(request, "complaints/track.html", {"complaint": None})
        return render(request, "complaints/track.html", {"complaint": None})

    complaint = get_object_or_404(Complaint, id=complaint_id)
    return render(request, "complaints/track.html", {"complaint": complaint})


# ✅ Export Grievance Report as CSV / Excel
def export_complaints_csv(request):
    response = HttpResponse(content_type='text/csv; charset=utf-8')
    response['Content-Disposition'] = f'attachment; filename="GovTech_CRM_Grievance_Report_{timezone.now().strftime("%Y%m%d_%H%M")}.csv"'

    writer = csv.writer(response)
    writer.writerow([
        'Grievance ID', 'Title', 'Citizen Name', 'Category', 'Priority', 
        'Location', 'Status', 'Assigned Authority', 'Submission Date', 
        'SLA Deadline', 'SLA Status', 'Original Grievance', 'Official Remarks'
    ])

    complaints = Complaint.objects.all().order_by('-created_at')
    for c in complaints:
        writer.writerow([
            f"#{c.id}",
            c.title,
            c.name,
            c.get_category_display() if hasattr(c, 'get_category_display') else c.category,
            str(c.priority).capitalize(),
            c.location,
            c.status,
            c.assigned_authority or 'Pending Assignment',
            c.created_at.strftime('%d-%m-%Y %H:%M') if c.created_at else '',
            c.sla_deadline.strftime('%d-%m-%Y') if c.sla_deadline else '',
            c.sla_status.replace('_', ' ').title(),
            c.complaint_text.replace('\n', ' '),
            (c.admin_remarks or '').replace('\n', ' ')
        ])

    return response


# ✅ Mark Notification as Read
def mark_notification_read(request, notification_id):
    if request.user.is_authenticated:
        Notification.objects.filter(id=notification_id, user=request.user).update(is_read=True)
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({'status': 'ok'})
    return redirect('citizen_dashboard')


# ✅ Legacy compatibility views
def submit_complaint(request):
    return redirect('citizen_dashboard')

def success(request, complaint_id):
    return redirect('track_complaint', complaint_id=complaint_id)

def analytics(request):
    return redirect('admin_dashboard')


# ✅ In-App Messaging: Fetch Thread (JSON)
def message_thread(request, complaint_id):
    if not request.user.is_authenticated:
        return JsonResponse({'error': 'Login required'}, status=401)

    complaint = get_object_or_404(Complaint, id=complaint_id)
    user = request.user
    is_admin = user.is_staff or (hasattr(user, 'profile') and user.profile.role == 'admin')

    # Role guard: citizen can only access their own complaint thread
    if not is_admin and complaint.user != user:
        return JsonResponse({'error': 'Access denied'}, status=403)

    msgs = Message.objects.filter(complaint=complaint).select_related('sender')

    # Mark messages addressed to this user as read
    Message.objects.filter(complaint=complaint, is_read=False).exclude(sender=user).update(is_read=True)

    data = []
    for m in msgs:
        data.append({
            'id': m.id,
            'body': m.body,
            'sender_name': m.sender.get_full_name() or m.sender.username,
            'sender_initials': m.sender_initials,
            'sender_role': m.sender_role,
            'is_self': (m.sender == user),
            'is_read': m.is_read,
            'attachment_url': m.attachment.url if m.attachment else None,
            'is_attachment_image': m.is_attachment_image,
            'created_at': m.created_at.strftime('%d %b %Y, %I:%M %p'),
            'timestamp_iso': m.created_at.isoformat(),
        })

    return JsonResponse({'messages': data, 'complaint_title': complaint.title, 'complaint_id': complaint.id})


# ✅ In-App Messaging: Send Message (JSON POST)
def send_message_view(request, complaint_id):
    if not request.user.is_authenticated:
        return JsonResponse({'error': 'Login required'}, status=401)
    if request.method != 'POST':
        return JsonResponse({'error': 'POST required'}, status=405)

    complaint = get_object_or_404(Complaint, id=complaint_id)
    user = request.user
    is_admin = user.is_staff or (hasattr(user, 'profile') and user.profile.role == 'admin')

    # Role guard
    if not is_admin and complaint.user != user:
        return JsonResponse({'error': 'Access denied'}, status=403)

    body = request.POST.get('body', '').strip()
    if not body:
        return JsonResponse({'error': 'Message body required'}, status=400)

    msg = Message(complaint=complaint, sender=user, body=body)
    if 'attachment' in request.FILES:
        msg.attachment = request.FILES['attachment']
    msg.save()

    # Notify the other party
    if is_admin and complaint.user:
        Notification.objects.create(
            user=complaint.user,
            complaint=complaint,
            title=f"New message on Grievance #{complaint.id}",
            message=f"Officer replied on your grievance '{complaint.title}': {body[:80]}{'…' if len(body) > 80 else ''}"
        )
    elif not is_admin:
        # Notify admins (simplified: notify all staff)
        for staff_user in User.objects.filter(is_staff=True)[:3]:
            Notification.objects.create(
                user=staff_user,
                complaint=complaint,
                title=f"Citizen message on Grievance #{complaint.id}",
                message=f"Citizen {user.get_full_name() or user.username} sent: {body[:80]}{'…' if len(body) > 80 else ''}"
            )

    return JsonResponse({
        'status': 'sent',
        'id': msg.id,
        'body': msg.body,
        'sender_name': user.get_full_name() or user.username,
        'sender_initials': msg.sender_initials,
        'sender_role': msg.sender_role,
        'is_self': True,
        'is_read': False,
        'attachment_url': msg.attachment.url if msg.attachment else None,
        'is_attachment_image': msg.is_attachment_image,
        'created_at': msg.created_at.strftime('%d %b %Y, %I:%M %p'),
    })


# ✅ In-App Messaging: Mark Message as Read
def mark_message_read(request, message_id):
    if not request.user.is_authenticated:
        return JsonResponse({'error': 'Login required'}, status=401)
    Message.objects.filter(id=message_id).exclude(sender=request.user).update(is_read=True)
    return JsonResponse({'status': 'ok'})


# ✅ In-App Messaging: Unread Message Count (for nav badge)
def unread_message_count(request):
    if not request.user.is_authenticated:
        return JsonResponse({'count': 0})
    user = request.user
    is_admin = user.is_staff or (hasattr(user, 'profile') and user.profile.role == 'admin')

    if is_admin:
        count = Message.objects.filter(is_read=False).exclude(sender=user).count()
    else:
        count = Message.objects.filter(
            complaint__user=user, is_read=False
        ).exclude(sender=user).count()

    return JsonResponse({'count': count})


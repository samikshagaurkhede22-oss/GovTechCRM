from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import timedelta

class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('citizen', 'Citizen / User'),
        ('admin', 'Admin / Grievance Officer'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='citizen')
    mobile = models.CharField(max_length=20, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    department = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} ({self.role})"


class Complaint(models.Model):
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('emergency', 'Emergency'),
    ]

    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('In Progress', 'In Progress'),
        ('Resolved', 'Resolved'),
    ]

    CATEGORY_CHOICES = [
        ('water', 'Water Supply & Quality'),
        ('electricity', 'Electricity & Power Supply'),
        ('roads', 'Roads & Infrastructure'),
        ('sanitation', 'Sanitation & Solid Waste'),
        ('health', 'Healthcare & Hospitals'),
        ('revenue', 'Revenue & Land Records'),
        ('education', 'Public Education & Schools'),
        ('other', 'General Administration & Other'),
    ]

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='complaints')
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200, default="Grievance Redressal Request")
    language = models.CharField(max_length=50, default="english")
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES, default='other')
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default="medium")
    location = models.CharField(max_length=200, default="Central District")
    complaint_text = models.TextField()
    translated_text = models.TextField(blank=True, null=True)
    attachment = models.FileField(upload_to='complaint_attachments/', blank=True, null=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default="Pending")
    assigned_authority = models.CharField(max_length=150, blank=True, null=True)
    admin_remarks = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f"Complaint #{self.id} - {self.title[:30]} ({self.status})"

    @property
    def sla_days(self):
        mapping = {
            'emergency': 2,
            'high': 4,
            'medium': 7,
            'low': 14
        }
        return mapping.get(str(self.priority).lower(), 7)

    @property
    def sla_deadline(self):
        if self.created_at:
            return self.created_at + timedelta(days=self.sla_days)
        return timezone.now() + timedelta(days=self.sla_days)

    @property
    def sla_status(self):
        if self.status == 'Resolved':
            return 'resolved'
        now = timezone.now()
        deadline = self.sla_deadline
        if now > deadline:
            return 'breached'
        elif (deadline - now).total_seconds() < 86400 * 2:  # Less than 2 days
            return 'approaching'
        return 'on_track'

    @property
    def days_remaining(self):
        now = timezone.now()
        diff = self.sla_deadline - now
        return max(0, diff.days)

    @property
    def is_image_attachment(self):
        if not self.attachment:
            return False
        name = self.attachment.name.lower()
        return name.endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'))

    @property
    def is_video_attachment(self):
        if not self.attachment:
            return False
        name = self.attachment.name.lower()
        return name.endswith(('.mp4', '.webm', '.mov', '.avi', '.mkv'))


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    complaint = models.ForeignKey(Complaint, on_delete=models.CASCADE, null=True, blank=True, related_name='notifications')
    title = models.CharField(max_length=200)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notification for {self.user.username}: {self.title}"


class Message(models.Model):
    """In-App Messaging: role-based threaded messages tied to a grievance complaint."""
    complaint = models.ForeignKey(
        Complaint, on_delete=models.CASCADE, related_name='messages'
    )
    sender = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='sent_messages'
    )
    body = models.TextField()
    attachment = models.FileField(
        upload_to='message_attachments/', blank=True, null=True
    )
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"Message from {self.sender.username} on Complaint #{self.complaint_id}"

    @property
    def sender_initials(self):
        name = self.sender.get_full_name() or self.sender.username
        parts = name.strip().split()
        if len(parts) >= 2:
            return (parts[0][0] + parts[-1][0]).upper()
        return name[:2].upper()

    @property
    def sender_role(self):
        if hasattr(self.sender, 'profile'):
            return self.sender.profile.role
        return 'admin' if self.sender.is_staff else 'citizen'

    @property
    def is_attachment_image(self):
        if not self.attachment:
            return False
        return self.attachment.name.lower().endswith(
            ('.png', '.jpg', '.jpeg', '.gif', '.webp')
        )

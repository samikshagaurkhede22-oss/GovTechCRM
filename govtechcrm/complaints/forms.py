from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Complaint, UserProfile

# ✅ Enhanced User Registration Form
class UserRegisterForm(UserCreationForm):
    full_name = forms.CharField(
        max_length=150, 
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter full legal name'})
    )
    email = forms.EmailField(
        required=True,
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'name@example.com'})
    )
    mobile = forms.CharField(
        max_length=15, 
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': '10-digit mobile number (e.g. 9876543210)'})
    )
    address = forms.CharField(
        max_length=255, 
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Residential / Office Address'})
    )
    district = forms.CharField(
        max_length=100, 
        required=False,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'District / City'})
    )
    role = forms.ChoiceField(
        choices=UserProfile.ROLE_CHOICES,
        initial='citizen',
        widget=forms.Select(attrs={'class': 'form-select'})
    )

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ('username', 'full_name', 'email', 'mobile', 'address', 'district', 'role')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields:
            if field not in ['role', 'full_name', 'mobile', 'address', 'district']:
                self.fields[field].widget.attrs.update({'class': 'form-control'})

    def save(self, commit=True):
        user = super().save(commit=False)
        full_name = self.cleaned_data.get('full_name', '')
        parts = full_name.split(' ', 1)
        user.first_name = parts[0]
        user.last_name = parts[1] if len(parts) > 1 else ''
        user.email = self.cleaned_data.get('email', '')
        
        role = self.cleaned_data.get('role', 'citizen')
        if role == 'admin':
            user.is_staff = True
            
        if commit:
            user.save()
            UserProfile.objects.update_or_create(
                user=user,
                defaults={
                    'role': role,
                    'mobile': self.cleaned_data.get('mobile', ''),
                    'address': self.cleaned_data.get('address', ''),
                    'district': self.cleaned_data.get('district', ''),
                    'department': 'General Administration' if role == 'admin' else ''
                }
            )
        return user


# ✅ Enhanced Complaint Submission Form
class ComplaintForm(forms.ModelForm):
    LANGUAGE_CHOICES = [
        ('english', 'English (English)'),
        ('hindi', 'हिन्दी (Hindi)'),
        ('sanskrit', 'संस्कृतम् (Sanskrit)'),
        ('tamil', 'தமிழ் (Tamil)'),
        ('telugu', 'తెలుగు (Telugu)'),
        ('marathi', 'मराठी (Marathi)'),
        ('bengali', 'বাংলা (Bengali)'),
    ]

    language = forms.ChoiceField(
        choices=LANGUAGE_CHOICES,
        initial='english',
        widget=forms.Select(attrs={'class': 'form-select', 'id': 'complaint_language'})
    )

    category = forms.ChoiceField(
        choices=Complaint.CATEGORY_CHOICES,
        widget=forms.Select(attrs={'class': 'form-select', 'id': 'complaint_category'})
    )

    priority = forms.ChoiceField(
        choices=Complaint.PRIORITY_CHOICES,
        initial='medium',
        widget=forms.Select(attrs={'class': 'form-select', 'id': 'complaint_priority'})
    )

    title = forms.CharField(
        max_length=200,
        widget=forms.TextInput(attrs={
            'class': 'form-control', 
            'placeholder': 'Brief summary of the issue (e.g. Broken water pipeline on MG Road)'
        })
    )

    name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Citizen Full Name'})
    )

    location = forms.CharField(
        max_length=200,
        widget=forms.TextInput(attrs={
            'class': 'form-control', 
            'placeholder': 'Ward / Locality / Landmark / Pincode'
        })
    )

    complaint_text = forms.CharField(
        widget=forms.Textarea(attrs={
            'class': 'form-control', 
            'rows': 4, 
            'id': 'complaint_text_input',
            'placeholder': 'Describe your complaint in detail. You can also use the Voice Input (Mic) button below.'
        })
    )

    attachment = forms.FileField(
        required=False,
        widget=forms.FileInput(attrs={
            'class': 'form-control',
            'id': 'attachment_input',
            'accept': 'image/*,video/*,.pdf,.doc,.docx'
        })
    )

    class Meta:
        model = Complaint
        fields = ['title', 'name', 'language', 'category', 'priority', 'location', 'complaint_text', 'attachment']


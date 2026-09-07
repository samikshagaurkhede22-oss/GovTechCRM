from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Complaint

@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'language', 'complaint_text', 'translated_text', 'status')
    search_fields = ('name', 'complaint_text', 'status')
    list_filter = ('status', 'language')

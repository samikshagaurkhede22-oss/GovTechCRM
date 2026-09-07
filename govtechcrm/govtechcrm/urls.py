"""
URL configuration for govtechcrm project.

The `urlpatterns` list routes URLs to views.
For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from complaints import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.home, name="home"),
    path("register/", views.register, name="register"),
    path("login/", views.login_view, name="login"),
    path("logout/", views.logout_view, name="logout"),
    path("demo-login/<str:role>/", views.demo_login, name="demo_login"),
    path("dashboard/", views.citizen_dashboard, name="citizen_dashboard"),
    path("admin-dashboard/", views.admin_dashboard, name="admin_dashboard"),
    path("submit/", views.submit_complaint, name="submit_complaint"),
    path("track/", views.track_complaint, name="track_search"),
    path("track/<int:complaint_id>/", views.track_complaint, name="track_complaint"),
    path("success/<int:complaint_id>/", views.success, name="success"),
    path("update_status/<int:complaint_id>/", views.update_status, name="update_status"),
    path("analytics/", views.analytics, name="analytics"),
    path("export/csv/", views.export_complaints_csv, name="export_complaints_csv"),
    path("notifications/read/<int:notification_id>/", views.mark_notification_read, name="mark_notification_read"),
    # In-App Messaging API
    path("messages/<int:complaint_id>/", views.message_thread, name="message_thread"),
    path("messages/<int:complaint_id>/send/", views.send_message_view, name="send_message"),
    path("messages/msg/<int:message_id>/read/", views.mark_message_read, name="mark_message_read"),
    path("messages/unread-count/", views.unread_message_count, name="unread_message_count"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


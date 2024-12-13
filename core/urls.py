from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="home"),
    path("toggle_menu", views.toggle_menu, name="toggle_menu"),
    path("sandbox", views.sandbox, name="sandbox"),
]
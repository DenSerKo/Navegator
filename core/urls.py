from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="home"),
    path("test_css", views.test_css, name="test_css"),
]
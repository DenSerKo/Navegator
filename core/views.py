from django.shortcuts import render


def index(request):
    return render(request, 'core/index.html')


def toggle_menu(request):
    return render(request, 'core/toggle-menu.html')


def sandbox(request):
    return render(request, 'core/sandbox.html')
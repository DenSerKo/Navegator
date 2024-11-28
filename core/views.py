from django.shortcuts import render


def index(request):
    return render(request, 'core/index.html')


def test(request):
    return render(request, 'core/test.html')


def test_css(request):
    return render(request, 'core/test_css.html')
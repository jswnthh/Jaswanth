from django.http import HttpResponse
from django.template import loader

def content(request):
    template = loader.get_template("index.html")
    return HttpResponse(template.render())

def blogs(request):
    template = loader.get_template("blogs.html")
    return HttpResponse(template.render())

def test(request):
    template = loader.get_template("test.html")
    return HttpResponse(template.render())
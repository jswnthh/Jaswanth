from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('', views.content, name='content'),
    path('test/', views.test, name='test'),
    path('blogs/', views.blogs, name='blogs')
]

urlpatterns += staticfiles_urlpatterns()
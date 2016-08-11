from django.conf.urls import url
from django.contrib import admin

from ebdjango.tasks import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'login', views.login, name='login'),
    url(r'task/status', views.task_status),
    url(r'task/save', views.task_new),
    url(r'edit/(?P<task_id>\w+)', views.index, name='edit'),
    url(r'add', views.index, name='add'),
    url(r'^$', views.index, name='index'),
]
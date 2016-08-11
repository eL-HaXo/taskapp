from django.contrib import admin

from ebdjango.tasks.models import Task, TaskList

admin.site.register(Task)
admin.site.register(TaskList)
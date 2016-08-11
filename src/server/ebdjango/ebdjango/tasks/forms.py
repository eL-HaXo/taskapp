# from django.db import models

# class TaskList(models.Model):
#     tasklist_id = models.AutoField(primary_key=True)
#     user_id = models.IntegerField()
#     name = models.CharField(max_length=25)

#     def __unicode__(self):
#         return self.name


# class Task(models.Model):
#     task_id = models.AutoField(primary_key=True)
#     tasklist_id = models.ForeignKey(TaskList)
#     description = models.CharField(max_length=240)
#     priority = models.IntegerField(default=3)
#     status = models.BooleanField(default=0)
#     target_date = models.DateField()

#     def __unicode__(self):
#         return self.description

from django.forms import ModelForm
from django.contrib.auth.models import User

from ebdjango.tasks.models import Task, TaskList

class TaskStatusForm(ModelForm):
    class Meta:
        model = Task
        fields = ['task_id', 'status']


class EditTaskForm(ModelForm):
    class Meta:
        model = Task
        fields = ['task_id', 'status', 'description', 'priority', 'status', 'target_date']


class NewTaskForm(ModelForm):
    class Meta:
        model = Task
        fields = ['status', 'description', 'priority', 'status', 'target_date']


class NewUserForm(ModelForm):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email', 'password']
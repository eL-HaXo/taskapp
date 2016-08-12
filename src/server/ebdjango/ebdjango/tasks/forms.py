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
        fields = ['task_id', 'tasklist', 'status', 'description', 'priority', 'status', 'target_date']


class NewTaskForm(ModelForm):
    class Meta:
        model = Task
        fields = ['tasklist', 'status', 'description', 'priority', 'status', 'target_date']


class NewUserForm(ModelForm):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email', 'password']
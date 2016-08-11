from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template import loader
from django.contrib.auth.decorators import login_required

from ebdjango.tasks.forms import NewTaskForm, EditTaskForm, TaskStatusForm, NewUserForm

def task_new(request):
    valid_form = False
    if request.method == 'POST':
        form = NewTaskForm(request.POST)
        print 'form valid', form.is_valid()
        if not form.is_valid():
            print form.errors

    return JsonResponse({ 'valid_form': form.is_valid() })
    # {
    #     "task_id": task_id,
    #     "description": description,
    #     "targetd_ate": target_date,
    #     "priority": priority,
    #     "status": int(status)
    # }


def task_status(request):
    if request.method == 'POST':
        print 'REQUEST'
        form = TaskStatusForm(request.POST)
        print form
        print form.is_valid()

    return JsonResponse({
        'task_id': 'task_id',
        'status': 'status'
    })


def login(request):
    return render(request, 'login.html', {'new_user_form': NewUserForm})

# @login_required(login_url='/login')
def index(request, task_id=None):
    return render(request, 'index.html', {})
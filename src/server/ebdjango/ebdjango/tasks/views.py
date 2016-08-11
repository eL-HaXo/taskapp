from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template import loader
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.core import serializers

from ebdjango.tasks.models import Task, TaskList
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


# def create_tasklist(request):
#     username = request.POST.get('username')
#     password = request.POST.get('password')
#     tasklist = TaskList.objects.get(user_id=user.id)

def get_or_create_tasklist(request):
    """ Logs in a user and retrieves their task list """
    tasklist_name = request.POST.get('tasklist_name')
    tasklist_password = request.POST.get('tasklist_password')
        # Get Task List
    try:
        tasklist = TaskList.objects.get(name=tasklist_name, password=tasklist_password)
        tasklist_tasks = [{
            "task_id": task.task_id,
            "description": task.description,
            "status": task.status,
            "target_date": task.target_date,
            "priority": task.priority
        } for task in Task.objects.filter(tasklist_id=tasklist.tasklist_id)]
    except Exception, e:
        tasklist = TaskList.objects.create(name=tasklist_name, password=tasklist_password)
        tasklist_tasks = []
        pass
    print "TASKLIST ID:", tasklist.tasklist_id
    return JsonResponse({ 'success': True, 'tasklist': tasklist_tasks, 'tasklist_id': tasklist.tasklist_id, 'tasklist_name': tasklist.name })
    # else:
    #     return JsonResponse({ 'error': 'Sorry. I couldn\'t find that username / password combination.' })


def login_page(request):
    # return render(request, 'login.html', {'new_user_form': NewUserForm})
    print "Login View"
    return render(request, 'index.html', {})


# @login_required(login_url='/login')
def index(request, task_id=None):
    print "Index View"
    return render(request, 'index.html', {})

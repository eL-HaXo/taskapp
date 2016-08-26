from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from ebdjango.tasks.models import Task, TaskList
from ebdjango.tasks.forms import NewTaskForm, EditTaskForm, TaskStatusForm, NewUserForm

def task_new(request):
    valid_form = False
    if request.method == 'POST':
        form = NewTaskForm(request.POST)
        if form.is_valid():
            task = form.save()
            return JsonResponse({
                'task_id': task.task_id,
                'description': task.description,
                'target_date': task.target_date,
                'priority': task.priority,
                'status': task.status
            })

    return JsonResponse({ 'error': 'Could not save task.' })


def task_edit(request):
    valid_form = False
    if request.method == 'POST':
        instance = Task.objects.get(task_id=request.POST['id'])
        form = EditTaskForm(request.POST, instance=instance)
        if form.is_valid():
            task = form.save()
            return JsonResponse({
                'task_id': task.task_id,
                'description': task.description,
                'target_date': task.target_date,
                'priority': task.priority,
                'status': task.status
            })

    return JsonResponse({ 'error': 'Could not save task.' })


def task_status(request):
    if request.method == 'POST':
        instance = Task.objects.get(task_id=request.POST['id'])
        form = TaskStatusForm(request.POST, instance=instance)
        if form.is_valid():
            task = form.save()

    return JsonResponse({
        'task_id': task.task_id,
        'status': task.status
    })


def get_or_create_tasklist(request):
    """ Logs in a user and retrieves their task list """
    tasklist_name = request.POST.get('tasklist_name')
    tasklist_password = request.POST.get('tasklist_password')
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
    return JsonResponse({ 'success': True, 'tasklist': tasklist_tasks, 'tasklist_id': tasklist.tasklist_id, 'tasklist_name': tasklist.name })


def index(request, task_id=None):
    return render(request, 'index.html', {})

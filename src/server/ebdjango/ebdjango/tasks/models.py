from django.db import models

class TaskList(models.Model):
    tasklist_id = models.AutoField(primary_key=True)
    password = models.CharField(max_length=128)
    name = models.CharField(max_length=25)

    def __unicode__(self):
        return self.name


class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    tasklist_id = models.ForeignKey(TaskList)
    description = models.CharField(max_length=240)
    priority = models.IntegerField(default=3)
    status = models.BooleanField(default=0)
    target_date = models.DateField()

    def __unicode__(self):
        return self.description

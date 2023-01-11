from django.db import models


# Create your models here.
class TimeStamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract=True


class Unit(models.Model):
    short_form = models.CharField(max_length=5, unique=True)
    title = models.CharField(max_length=15)
    detail = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title
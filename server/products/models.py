from django.db import models


class Unit(models.Model):
    short_form = models.CharField(max_length=5, unique=True)
    title = models.CharField(max_length=15)
    detail = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Product(models.Model):
    name = models.CharField(max_length=63)
    brand = models.CharField(max_length=50)
    unit = models.ForeignKey(to=Unit, on_delete=models.SET_NULL, null=True)
    supplier = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name



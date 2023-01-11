from django.db import models
from common.models import TimeStamp, Unit
from supplier.models import Supplier


class Product(TimeStamp):
    name = models.CharField(max_length=63)
    brand = models.CharField(max_length=50)
    unit = models.ForeignKey(to=Unit, on_delete=models.SET_NULL, null=True)
    supplier = models.ForeignKey(to=Supplier, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name



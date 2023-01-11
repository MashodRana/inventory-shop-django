from django.db import models

from common.models import TimeStamp
from suppliers.models import Supplier


# Create your models here.
class Purchase(TimeStamp):
    supplier = models.ForeignKey(to=Supplier, on_delete=models.SET_NULL, null=True)
    detail = models.TextField()
    total_price = models.FloatField()

    def __str__(self):
        return f"order-{self.pk}"
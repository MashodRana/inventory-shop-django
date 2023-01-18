from django.db import models

from common.models import TimeStamp
from supplier.models import Supplier


# Create your models here.
class Purchase(TimeStamp):
    supplier = models.ForeignKey(to=Supplier, on_delete=models.SET_NULL, null=True)
<<<<<<< Updated upstream
    detail = models.TextField()
    total_price = models.FloatField()
=======
    note = models.TextField()
    total = models.FloatField()
>>>>>>> Stashed changes

    def __str__(self):
        return f"order-{self.pk}"
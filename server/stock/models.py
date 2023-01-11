from django.db import models
from common.models import TimeStamp, Unit
from product.models import Product


# Create your models here.
class Stock(TimeStamp):
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE)
    unit_purchase_price = models.FloatField()
    unit_selling_price = models.FloatField()
    quantity = models.IntegerField()

    def __str__(self) -> str:
        return self.product.name

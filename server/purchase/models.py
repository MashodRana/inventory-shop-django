from django.db import models

from common.models import TimeStamp
from supplier.models import Supplier
from product.models import Product


# Create your models here.
class Purchase(TimeStamp):
    supplier = models.ForeignKey(to=Supplier, on_delete=models.SET_NULL, null=True)
    note = models.TextField()
    total_price = models.FloatField()

    def __str__(self):
        return f"order-{self.pk}"


class PurchasedProduct(TimeStamp):
    bill_no = models.ForeignKey(Purchase, on_delete=models.CASCADE, related_name='purchase_bill_no')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(default=1)
    price = models.FloatField(default=0.1)
    total_price = models.FloatField(default=0)

    def __str__(self):
        return self.product.name

from django.db import models
from common.models import TimeStamp


# Create your models here.
class Supplier(TimeStamp):
    supplier_code = models.CharField(max_length=63)
    name = models.CharField(max_length=31)
    designation = models.CharField(max_length=15)
    primary_phone = models.CharField(max_length=15)
    secondary_phone = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    company = models.CharField(max_length=31)
    address = models.TextField()

    def  __str__(self) -> str:
        return self.name    

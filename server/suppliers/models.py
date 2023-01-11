from django.db import models


# Create your models here.
class Supplier(models.Model):
    supplier_code = models.CharField(max_length=63)
    name = models.CharField(max_length=31)
    designation = models.CharField(max_length=15)
    primary_phone = models.CharField(max_length=15)
    secondary_phone = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    company = models.CharField(max_length=31)
    address = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def  __str__(self) -> str:
        return self.name    

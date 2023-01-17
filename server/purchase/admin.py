from django.contrib import admin
from purchase.models import Purchase, PurchasedProduct

# Register your models here.
admin.site.register(Purchase)
admin.site.register(PurchasedProduct)

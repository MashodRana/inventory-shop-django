from rest_framework import serializers

from purchase.models import Purchase, PurchasedProduct


class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = "__all__"


class PurchasedProductSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', required=False)
    supplier = serializers.CharField(source='bill_no.supplier')
    class Meta:
        model = PurchasedProduct
        fields = "__all__"


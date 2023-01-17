from rest_framework import serializers

from purchase.models import Purchase, PurchasedProduct


class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = "__all__"


class PurchasedProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchasedProduct
        fields = "__all__"


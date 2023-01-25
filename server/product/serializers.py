from rest_framework import serializers

from product.models import Product


class ProductSerializer(serializers.ModelSerializer):
    unit_title = serializers.CharField(source='unit.title', required=False)

    class Meta:
        model = Product
        fields = '__all__'

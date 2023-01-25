from rest_framework import serializers

from stock.models import Stock


class StockSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', required=False)

    class Meta:
        model = Stock
        fields = '__all__'

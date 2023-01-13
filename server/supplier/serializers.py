from rest_framework import serializers

from supplier.models import Supplier


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = [
                'supplier_code',
                'name',
                'designation',
                'primary_phone',
                'secondary_phone',
                'email',
                'company',
                'address'
            ]
from rest_framework import serializers

from common.models import Unit


class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = ['short_form', 'title', 'detail']

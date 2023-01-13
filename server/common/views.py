from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from common.serializers import UnitSerializer
from common.models import Unit


# Create your views here.
class UnitList(APIView):
    
    def get(self, request, format=None):
        units = Unit.objects.all()
        serializer = UnitSerializer(units, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = UnitSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)



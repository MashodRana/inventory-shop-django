from django.shortcuts import render
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.response import Response

from supplier.models import Supplier
from supplier.serializers import SupplierSerializer


# Create your views here.
class SupplierListView(APIView):
    def get(self, request, fromat=None):
        suppliers = Supplier.objects.all()
        print(suppliers)
        serializer = SupplierSerializer(suppliers, many=True)
        return Response(serializer.data)

    def post(self, request, fromat=None):
        serializer = SupplierSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
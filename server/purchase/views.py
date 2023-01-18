from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.response import Response

from purchase.models import Purchase, PurchasedProduct
from purchase.serializers import PurchaseSerializer, PurchasedProductSerializer


# Create your views here.

class PurchaseView(APIView):
    def get(self, request, format=None):
        purchases = Purchase.objects.all()
        serializer = PurchaseSerializer(purchases, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PurchaseSerializer(data=request.data)
        if serializer.is_valid():
            purchase = serializer.save()
            for i, product in enumerate(request.data['products']):
                request.data['products'][i]['bill_no'] = purchase.id

            serializer = PurchasedProductSerializer(data=request.data['products'], many=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=HTTP_201_CREATED)
            else:
                purchase.delete()
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class PurchasedProductsView(APIView):
    def get(self, request, format=None):
        purchased_products = PurchasedProduct.objects.all()
        serializer = PurchasedProductSerializer(purchased_products, many=True)
        return Response(serializer.data)


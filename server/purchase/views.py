from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
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
                request.data['products'][i]['bill_no'] = purchase.bill_no

            serializer = PurchasedProductSerializer(data=request.data['products'], many=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=HTTP_201_CREATED)
            else:
                purchase.delete()
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class PurchaseDetailView(APIView):
    def get(self, request, pk, format=None):
        purchase = get_object_or_404(Purchase, pk=pk)
        serializer = PurchaseSerializer(purchase)
        products = purchase.get_purchased_products()
        serializer2 = PurchasedProductSerializer(products, many=True)
        data = serializer.data
        data['products'] = serializer2.data
        return Response(data)

    def delete(self, request, pk, format=None):
        purchase = get_object_or_404(Purchase, pk=pk)
        purchase.delete()
        return Response(status=HTTP_204_NO_CONTENT)



class PurchasedProductsView(APIView):
    def get(self, request, format=None):
        purchased_products = PurchasedProduct.objects.all()
        serializer = PurchasedProductSerializer(purchased_products, many=True)
        return Response(serializer.data)

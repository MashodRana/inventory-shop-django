from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.response import Response

from product.models import Product
from product.serializers import ProductSerializer


# Create your views here.
class ProductListView(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class ProductDetailView(APIView):
    """ product detail, update and remove """

    def get(self, request, pk, format=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        product = get_object_or_404(Product, pk=pk)
        product.delete()
        return Response(status=HTTP_204_NO_CONTENT)


    
from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.response import Response

from stock.models import Stock
from stock.serializers import StockSerializer


# Create your views here.
class StockView(APIView):
    def get(self, request, format=None):
        stock_items = Stock.objects.all()
        serializer = StockSerializer(stock_items, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class StockDetailView(APIView):
    """ Stock detail, update and remove """

    def get(self, request, pk, format=None):
        stock_product = get_object_or_404(Stock, pk=pk)
        serializer = StockSerializer(stock_product)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        stock_product = get_object_or_404(Stock, pk=pk)
        serializer = StockSerializer(stock_product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        stock_product = get_object_or_404(Stock, pk=pk)
        stock_product.delete()
        return Response(status=HTTP_204_NO_CONTENT)

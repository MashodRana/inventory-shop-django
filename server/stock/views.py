from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
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
        pass

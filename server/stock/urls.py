from django.urls import path

from stock import views


urlpatterns = [
    path('stock/', views.StockView.as_view(), name='stock'),
]
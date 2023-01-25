from django.urls import path

from stock import views


urlpatterns = [
    path('stock/', views.StockView.as_view(), name='stock'),
    path('stock/<int:pk>/', views.StockDetailView.as_view(), name='stock_detail'),

]
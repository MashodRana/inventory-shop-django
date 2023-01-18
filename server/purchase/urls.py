from django.urls import path
from purchase import views

urlpatterns = [
    path('purchase/', views.PurchaseView.as_view(), name='purchase'),
    path('purchased-products/', views.PurchasedProductsView.as_view(), name='purchased-products'),
]
from django.urls import path

from product import views

urlpatterns = [
    path('products/', views.ProductListView.as_view(), name='products'),
]
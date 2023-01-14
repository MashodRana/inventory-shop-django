from django.urls import path

from supplier import views

urlpatterns = [
    path('suppliers/', views.SupplierListView.as_view(), name='suppliers'),
    path('suppliers/<int:pk>/', views.SupplierDetailView.as_view(), name='get_supplier'),
]
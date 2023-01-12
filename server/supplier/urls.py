from django.urls import path

from supplier import views

urlpatterns = [
    path('suppliers/', views.SupplierListView.as_view(), name='suppliers'),
]
from django.urls import path

from common import views

urlpatterns = [
    path('units/', views.UnitList.as_view(), name='units' ),
]
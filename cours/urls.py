from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('gpme-e6/', views.gpme_e6, name='gpme_e6'),
    path('gpme-e51/', views.gpme_e51, name='gpme_e51'),
    path('gpme-ebp/', views.gpme_ebp, name='gpme_ebp'),
    path('mco-e5/', views.mco_e5, name='mco_e5'),
]

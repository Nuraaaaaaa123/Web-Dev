from django.urls import path
from .views import ProductList, ProductDetail, CategoryList, CategoryDetail, CategoryProducts

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('products/<int:id>/', ProductDetail.as_view()),
    path('categories/', CategoryList.as_view()),
    path('categories/<int:id>/', CategoryDetail.as_view()),
    path('categories/<int:id>/products/', CategoryProducts.as_view()),
]
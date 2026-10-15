from django.urls import path
from . import views


urlpatterns = [
    
    path("", views.product_list, name="product_list"),
    path("category/<slug:slug>/", views.category_product, name="category_product"),
]

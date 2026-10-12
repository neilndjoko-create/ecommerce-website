from django.shortcuts import render
from .models import Product
# Create your views here.

def product_list (request):
    Products = Product.objects.filter(available=True)
    return render (request, "product_list.html", {"products":Products})
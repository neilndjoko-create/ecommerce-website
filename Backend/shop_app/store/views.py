from django.shortcuts import render, get_object_or_404
from .models import Product, Category
# Create your views here.

def product_list (request):
    Products = Product.objects.filter(available=True)
    categories = Category.objects.all()
    return render (request, "product_list.html", {
        "products":Products,
        "categories":categories})

def category_product(request, slug):
    category = get_object_or_404(Category, slug=slug)
    Products = Product.objects.filter(category=category,available=True)
    categories = Category.objects.all()
    return render (request, "product_list.html", {
        "category":category,
        "products":Products,
         "categories":categories})
    
    
def product_detail(request, slug):
     product = get_object_or_404(Product, slug=slug)
     
     return render(request, "product_detail.html",{
         "product":product,})
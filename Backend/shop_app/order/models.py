from django.db import models
from store.models import Product

# Create your models here.
class Order(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("confirmed", "Confirmed"),
        ("cancelled", "Cancelled"),
        ("delivered", "Delivered")
    ]
    customer_name= models.CharField(max_length=100)
    phone_number= models.CharField(max_length=60 )
    email= models.EmailField(max_length=80 , blank=True)
    address= models.TextField()
    status= models.CharField(max_length=60, choices=STATUS_CHOICES, default="pending")
    created_date= models.DateTimeField(auto_now_add=True)
    total_price= models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.customer_name
class OrderItem(models.Model):
    order= models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")
    product=models.ForeignKey(Product,on_delete=models.PROTECT)
    quantity=models.PositiveIntegerField(default=1)
    price= models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.quantity} x {self.product.name}"
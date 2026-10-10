from django.contrib import admin
from .models import Order, OrderItem

# Register your models here.


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):   
    list_display=["id", "customer_name", "phone_number", "status", "created_date","total_price"]
    list_filter=['status']   
    list_editable=['status']   
    inlines =[OrderItemInline]    
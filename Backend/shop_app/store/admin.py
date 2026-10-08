from django.contrib import admin
from .models import Category, Product
from django.utils.html import format_html

# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display =["name", "slug", "image_preview"]
    randomly_fields =["image_preview"]
    prepopulated_fields = {"slug": ("name",)}
    
    def image_preview(self, obj):
            if obj.image:
                return format_html('<img src ="{}" width="60">', obj.image.url)
            return "No image"

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display =["image_preview", "name", "category", "price","stock","available"]
    randomly_fields =["image_preview"]
    list_filter =["category", "available"]
    list_editable =["price", "stock", "available"]
    prepopulated_fields = {"slug": ("name",)}
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src ="{}" width="60">', obj.image.url)
        return "No image"
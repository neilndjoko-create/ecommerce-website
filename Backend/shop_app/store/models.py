from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=60)
    description = models.TextField(max_length=450, blank=True)
    slug = models.SlugField(unique=True)
    class Meta:  
         verbose_name_plural = 'Categories'
           
    def __str__(self):
         return self.name
    
class Product(models.Model):
       category = models.ForeignKey(Category, on_delete=models.CASCADE)
       name = models.CharField(max_length=60)
       description = models.TextField(max_length=450, blank=True)
       slug = models.SlugField(unique=True)
       price = models.DecimalField(max_digits=10, decimal_places=2)
       image =models.ImageField(upload_to="products/")
       stock = models.PositiveIntegerField()
       available = models.BooleanField(default=True)
       created = models.DateTimeField(auto_now_add=True)
       
      
       def __str__(self):
           return self.name
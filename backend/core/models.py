from django.conf import settings
from django.db import models

# Create your models here.
class Ongs(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    whatsapp = models.CharField(max_length=9)
    city = models.CharField(max_length=100)
    uf = models.CharField(max_length=2)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)

    def __str__(self):
        return self.name

class Incidents(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    value = models.DecimalField(max_digits=10, decimal_places=2)
    ong = models.ForeignKey(Ongs, on_delete=models.PROTECT)

    def __str__(self):
        return self.title


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)


    def __str__(self):
        return self.name
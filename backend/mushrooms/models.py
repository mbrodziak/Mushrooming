from django.db import models

# Create your models here.


class Mushroom(models.Model):
    name = models.CharField(max_length=256)
    latin_name = models.CharField(max_length=256, blank=True)
    application = models.CharField(max_length=128)
    photo = models.ImageField(upload_to="photos", blank=True)




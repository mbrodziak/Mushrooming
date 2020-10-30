from django.db import models


# Create your models here.


class Mushroom(models.Model):
    category = models.CharField(max_length=128)
    name = models.CharField(max_length=256)
    latin_name = models.CharField(max_length=256, blank=True)
    application = models.CharField(max_length=128)
    introduction = models.TextField(blank=True)
    type = models.CharField(max_length=128, blank=True)
    rim_hat = models.CharField(max_length=128, blank=True)
    color_hat = models.CharField(max_length=128, blank=True)
    shape_hat = models.CharField(max_length=128, blank=True)
    area_hat = models.CharField(max_length=128, blank=True)
    description_fruitcake = models.TextField(blank=True)
    milk = models.CharField(max_length=128, blank=True)
    color_pulp = models.CharField(max_length=128, blank=True)
    description_pulp = models.TextField(blank=True)
    details_type = models.TextField(blank=True)
    type_shaft = models.CharField(max_length=128, blank=True)
    color_shaft = models.CharField(max_length=128, blank=True)
    shape_shaft = models.CharField(max_length=128, blank=True)
    base_shaft = models.CharField(max_length=128, blank=True)
    area_shaft = models.CharField(max_length=128, blank=True)
    section_shaft = models.CharField(max_length=128, blank=True)
    description_shaft = models.TextField(blank=True)
    taste = models.CharField(max_length=128, blank=True)
    smell = models.CharField(max_length=128, blank=True)
    incidence_time = models.CharField(max_length=128, blank=True)
    season = models.TextField(blank=True)
    existence = models.TextField(blank=True)
    habitat = models.CharField(max_length=128, blank=True)
    photo = models.ImageField(upload_to="photos", blank=True)

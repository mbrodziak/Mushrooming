from django.contrib import admin

from .models import Mushroom


# Register your models here.

# admin.site.register(Mushroom)


@admin.register(Mushroom)
class MushroomAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'application']



from django.contrib import admin
from .models import Mushroom, Borowik, Mleczaj, Maslak, Muchomor, Podgrzybek


# Register your models here.

# admin.site.register(Mushroom)


@admin.register(Mushroom)
class MushroomAdmin(admin.ModelAdmin):
    list_display = ['name', 'application']


@admin.register(Borowik)
class BorowikAdmin(admin.ModelAdmin):
    list_display = ['name', 'application']


@admin.register(Mleczaj)
class MleczajAdmin(admin.ModelAdmin):
    list_display = ['name', 'application']


@admin.register(Maslak)
class MaslakAdmin(admin.ModelAdmin):
    list_display = ['name', 'application']


@admin.register(Muchomor)
class MuchomorAdmin(admin.ModelAdmin):
    list_display = ['name', 'application']

@admin.register(Podgrzybek)
class PodgrzybekAdmin(admin.ModelAdmin):
    list_display = ['name', 'application']
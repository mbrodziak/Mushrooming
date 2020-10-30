from rest_framework import serializers
from .models import Mushroom


class MushroomSerializers(serializers.ModelSerializer):
    class Meta:
        model = Mushroom
        fields = ('id', 'category', 'name', 'latin_name', 'application', 'photo')


class MushroomFullSerializers(serializers.ModelSerializer):
    class Meta:
        model = Mushroom
        fields = ('id', 'category', 'name', 'latin_name', 'application', 'introduction', 'type', 'rim_hat', 'color_hat',
                  'shape_hat', 'area_hat', 'description_fruitcake', 'milk', 'color_pulp', 'description_pulp',
                  'details_type', 'type_shaft', 'color_shaft', 'shape_shaft', 'base_shaft', 'area_shaft',
                  'section_shaft', 'description_shaft', 'taste', 'smell', 'incidence_time', 'season', 'existence',
                  'habitat', 'photo')

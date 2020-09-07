from rest_framework import serializers
from .models import Mushroom


class MushroomSerializers(serializers.ModelSerializer):
    class Meta:
        model = Mushroom
        fields = ('id', 'name', 'latin_name', 'application', 'photo')



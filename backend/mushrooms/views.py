from django.shortcuts import render
from django.views import View
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

from .models import Mushroom
from .serializers import MushroomSerializers
from rest_framework import generics, viewsets
from django.http import HttpResponse, JsonResponse


# Create your views here.


class MushroomListCreate(generics.ListCreateAPIView):
    queryset = Mushroom.objects.all()
    serializer_class = MushroomSerializers


def get_mushroom(request, id):
    mushroom = Mushroom.objects.get(id=id)
    serializer = MushroomSerializers(mushroom)
    return JsonResponse(serializer.data)


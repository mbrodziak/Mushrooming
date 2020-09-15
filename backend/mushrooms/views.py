from django.http import JsonResponse
from rest_framework import generics

from .models import Mushroom, Borowik, Maslak, Muchomor, Mleczaj
from .serializers import MushroomSerializers


# Create your views here.


class MushroomListCreate(generics.ListCreateAPIView):
    queryset = Mushroom.objects.all()
    serializer_class = MushroomSerializers


def get_mushroom_category(request, category):
    mushroom_category = ''
    if category == 'borowik':
        mushroom_category = Borowik.objects.all()
    elif category == 'maslak':
        mushroom_category = Maslak.objects.all()
    elif category == 'mleczaj':
        mushroom_category = Mleczaj.objects.all()
    elif category == 'muchomor':
        mushroom_category = Muchomor.objects.all()
    serializer = MushroomSerializers(mushroom_category, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_mushroom_category_object(request, category, id):
    mushroom_category = ''
    if category == 'borowik':
        mushroom_category = Borowik.objects.filter(id=id)
    elif category == 'maslak':
        mushroom_category = Maslak.objects.filter(id=id)
    elif category == 'mleczaj':
        mushroom_category = Mleczaj.objects.filter(id=id)
    elif category == 'muchomor':
        mushroom_category = Muchomor.objects.filter(id=id)
    serializer = MushroomSerializers(mushroom_category, many=True)
    return JsonResponse(serializer.data, safe=False)



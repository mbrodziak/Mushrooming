from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Mushroom
from .serializers import MushroomSerializers, MushroomFullSerializers


# Create your views here.


class MushroomViewSet(viewsets.ModelViewSet):
    queryset = Mushroom.objects.all()
    serializer_class = MushroomSerializers
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['category']

    def retrieve(self, request, *args, **kwargs):
        mushroom = self.get_object()
        serializer = MushroomFullSerializers(mushroom)
        return Response(serializer.data)


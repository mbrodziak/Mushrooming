from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers
from .views import MushroomViewSet

from . import views

router = routers.DefaultRouter()
router.register('mushrooms', MushroomViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

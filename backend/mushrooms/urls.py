from django.conf.urls import url
from django.urls import path, include
from . import views

urlpatterns = [
    path('api/mushroom/', views.MushroomListCreate.as_view()),
    path('api/mushroom/<int:id>', views.get_mushroom)
]

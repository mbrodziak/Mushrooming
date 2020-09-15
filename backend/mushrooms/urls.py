from django.conf.urls import url
from django.urls import path, include
from . import views

urlpatterns = [
    path('api/mushroom/', views.MushroomListCreate.as_view()),
    path('api/mushroom/<str:category>/', views.get_mushroom_category),
    path('api/mushroom/<str:category>/<int:id>', views.get_mushroom_category_object),
]

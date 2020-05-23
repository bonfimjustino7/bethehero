from django.urls import path, include
from rest_framework import routers
from core.api import views

router = routers.DefaultRouter()
router.register(r'incidents', views.IncidentsViewSet)
router.register(r'ongs', views.OngsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('session', views.SessionUser.as_view())
]
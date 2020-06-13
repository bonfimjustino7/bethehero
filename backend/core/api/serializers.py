from rest_framework import serializers

from core.models import Ongs, Incidents, Product


class OngsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ongs
        fields = ['id', 'name', 'email', 'whatsapp', 'city', 'uf']


class IncidentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incidents
        fields = ['id', 'title', 'description', 'value', 'ong']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price',]


class SessionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(read_only=True)

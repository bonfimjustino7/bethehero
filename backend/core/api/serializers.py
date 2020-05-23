from rest_framework import serializers

from core.models import Ongs, Incidents


class OngsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ongs
        fields = ['id', 'name', 'email', 'whatsapp', 'city', 'uf']


class IncidentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incidents
        fields = ['id', 'title', 'description', 'value', 'ong']


class SessionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(read_only=True)

from django.contrib.auth.models import User
from django.http import Http404, JsonResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, permissions, status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions
from rest_framework.response import Response
from rest_framework.views import APIView

from core.api.serializers import OngsSerializer, IncidentsSerializer, SessionSerializer
from core.models import Ongs, Incidents
from rest_framework.authentication import TokenAuthentication

class OngsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Ongs.objects.all()
    serializer_class = OngsSerializer

    #permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        user, created = User.objects.get_or_create(username=request.data['name'])
        if created:
            Token.objects.create(user=user)
        data = {
            'user': user,
            **request.data,
        }
        ong = Ongs.objects.create(**data)

        return JsonResponse({'id': ong.id}, status=status.HTTP_201_CREATED)

class IncidentsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Incidents.objects.all()
    serializer_class = IncidentsSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]  # define o filtro backend
    filterset_fields = ['ong']  # define qual o campo estará habilitado para busca

class SessionUser(APIView):

    """
        :param
        :id => id da ong
            ex: {"id": 1}

        :return => id e name
    """
    def get_serialize_object(self, serialize, **kwargs):
        try:
            object = Ongs.objects.get(**kwargs)
            token, created = Token.objects.get_or_create(user=object.user)
            data_serialized = serialize.to_representation(object)  # serializa o objeto
            data_serialized['token'] = token.key  # adiciona o token ao serialize

            return data_serialized

        except Ongs.DoesNotExist:
            raise Http404

    def post(self, request):
        serialize = SessionSerializer(data=request.data) # passando os dados para o serializer

        if serialize.is_valid():  # se o json passado pelo client for valido
            data = serialize.validated_data  # pega os dados validados
            object_serialized = self.get_serialize_object(serialize, **data)  # pega o objeto
            return JsonResponse(object_serialized, status=status.HTTP_200_OK)

        return Response(serialize.error_messages, status=status.HTTP_200_OK)

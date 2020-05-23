from django.contrib import admin

# Register your models here.
from core.models import Ongs, Incidents


@admin.register(Ongs)
class OngsAdmin(admin.ModelAdmin):
    pass

@admin.register(Incidents)
class IncidentAdmin(admin.ModelAdmin):
    pass
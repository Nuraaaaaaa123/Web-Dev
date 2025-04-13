from rest_framework import serializers
from .models import Vacancy

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary','company']

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField(max_length=200)
    city = serializers.CharField()
    address = serializers.CharField()
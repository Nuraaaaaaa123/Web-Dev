from rest_framework import serializers

from api.models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    city = serializers.CharField(max_length=255)
    address = serializers.CharField(max_length=255)

    

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description','salary', 'company')
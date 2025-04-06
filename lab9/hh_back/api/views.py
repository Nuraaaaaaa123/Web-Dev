from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Company,  Vacancy
from .serializers import CompanySerializer, VacancySerializer

class CompanyList(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

class  CompanyDetail(APIView):
    def get(self, request, id):
        company = Company.objects.get(pk=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class  VacancyDetail(APIView):
    def get(self, request, id):
        vacancy = Vacancy.objects.get(pk=id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

class CompanyVacancy(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(pk=id)
        except Company.DoesNotExist:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
        
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class TopTenVacancies(APIView):

    def get(self, request):
        top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top_ten_vacancies, many=True)
        return Response(serializer.data)
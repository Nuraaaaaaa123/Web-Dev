from django.views.decorators.csrf import csrf_exempt 
from api.models import Company , Vacancy
from api.serializers import CompanySerializer , CompanyModelSerializer, VacancyModelSerializer

from rest_framework.decorators import api_view 
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from rest_framework.views import APIView
#Company requests :

class CompanyListAPIView(APIView): 
    
    def get(self, request) : 
        companies = Company.objects.all()
        serializer = CompanyModelSerializer(companies , many=True)
        return Response(serializer.data)
    
    def post(self, request) : 
        serializer = CompanyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)    

class CompanyDetailAPIView(APIView) : 
    
    def get_object(self, company_id):
        try : 
            return Company.objects.get(id=company_id)
        except Company.DoesNotExist as e : 
            return Response({'error' : str(e)} , status=status.HTTP_400_BAD_REQUEST)


    def get(self , request , company_id):
        company = self.get_object(company_id)
        serializer = CompanyModelSerializer(company)
        return Response(serializer.data , status=status.HTTP_200_OK)
    def put(self , request , company_id):
        company = self.get_object(company_id)
        serializer = CompanyModelSerializer(instance=company,
                                             data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status=status.HTTP_200_OK)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request , company_id):        
        company = self.get_object(company_id)
        company.delete()
        return Response({'message' : 'Company was deleted'})

#Vacancy requests : 

class VacancyListAPIView(APIView) : 
    def get(self , request) : 
        vacancies = Vacancy.objects.all()
        serializer = VacancyModelSerializer(vacancies , many=True)
        return Response(serializer.data)
    def post(self , request) : 
        serializer = VacancyModelSerializer(data=request.data)
        if serializer.is_valid() : 
            try : 
                company = Company.objects.get(id=request.data['company'])
                serializer.save(company=company)
                return Response(serializer.data , status=status.HTTP_201_CREATED)
            except Company.DoesNotExist : 
                return Response({'error': 'Company not found'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyDetailAPIView(APIView):

    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist:
            raise ValueError({'error': 'Vacancy not found'})

    def get(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        serializer = VacancyModelSerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        serializer = VacancyModelSerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        vacancy.delete()
        return Response({'message': 'Vacancy was deleted'})

class TopTenVacanciesAPIView(APIView):

    def get(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)


class CompanyVacanciesAPIView(APIView):

    def get(self, request, company_id):
        try:
            company = Company.objects.get(id=company_id)
            vacancies = company.vacancies.all()
            serializer = VacancyModelSerializer(vacancies, many=True)
            return Response(serializer.data)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

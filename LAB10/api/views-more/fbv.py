import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt 
from api.models import Company , Vacancy
from api.serializers import CompanySerializer , CompanyModelSerializer, VacancyModelSerializer

from rest_framework.decorators import api_view 
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
#Company requests :





@api_view(http_method_names=['GET', 'POST'])
def companies_list(request) :
    if request.method == 'GET' :
        companies = Company.objects.all()
        serializer = CompanyModelSerializer(companies , many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST' : 
        serializer = CompanyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)    


@api_view(['GET','PUT','DELETE'])
def company_detail(request , company_id=None) : 
    
    try : 
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e : 
        return Response({'error' : str(e)} , status=status.HTTP_400_BAD_REQUEST)


    if request.method == 'GET':
        serializer = CompanyModelSerializer(company)
        return Response(serializer.data , status=status.HTTP_200_OK)
    elif request.method == 'PUT' : 
        serializer = CompanyModelSerializer(instance=company,
                                             data=request.data)
    
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status=status.HTTP_200_OK)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE' : 
        company.delete()
        return Response({'message' : 'Company was deleted'})
    
@api_view(http_method_names=['GET', 'POST'])
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancyModelSerializer(data=request.data)
        if serializer.is_valid():
            try:
                company = Company.objects.get(id=request.data['company'])
                serializer.save(company=company)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Company.DoesNotExist:
                return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, vacancy_id=None):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VacancyModelSerializer(vacancy)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = VacancyModelSerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response({'message': 'Vacancy was deleted'}, status=status.HTTP_200_OK)


@api_view(['GET'])
def topTen_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacancyModelSerializer(vacancies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def company_vacancies(request, company_id=None):
    try:
        company = Company.objects.get(id=company_id)
        vacancies = company.vacancies.all()
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
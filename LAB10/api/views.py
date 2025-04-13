from django.http import JsonResponse
from api.serializers import CompanySerializer, VacancySerializer
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
from django.views.generic import View
from django.views.decorators.http import require_http_methods

import json


class CompanyView(View):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        print(serializer.data)
        return JsonResponse(serializer.data, safe=False)
    

    def post(self, request):
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    


class CompanyDetailView(View):
    def get(self, request, pk):
        try:
            company = Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)})
        
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)

    def put(self, request, pk):
        try:
            company = Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)})
        
        data = json.loads(request.body)
        company.name = data.get('name', company.name)
        company.save()
        return JsonResponse(company.to_json())
    

    def delete(self, request, pk):
        try:
            company = Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)})
        
        company.delete()
        return JsonResponse({"deleted": True})


@require_http_methods(["GET"])
def company_vacancies(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
        vacancies_all = Vacancy.objects.all()
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    vacancies = Company.objects.get(id=pk).vacancy_set.all()
    serializer = VacancySerializer(vacancies, many=True)

    return JsonResponse(serializer.data, safe=False)



@csrf_exempt
@require_http_methods(["GET", "POST"])
def vacancies_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        print(data)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    






class VacancyDetailView(View):
    def get(self, request, pk):
        try:
            vacancy = Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}) 
        
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)

    def put(self, request, pk):
        try:
            vacancy = Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)})
        
        data = json.loads(request.body)
        vacancy.name = data.get('name', vacancy.name)
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    

    def delete(self, request, pk):
        try:
            vacancy = Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)})
        
        vacancy.delete()
        return JsonResponse({"deleted": True})






@csrf_exempt
@require_http_methods(["GET"])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data[:10], safe=False)
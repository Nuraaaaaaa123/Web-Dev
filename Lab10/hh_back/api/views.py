from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404
from .models import Company, Vacancy
from .serializers import VacancySerializer, CompanySerializer

def vacancy_view(request):
    vacancies = VacancySerializer(Vacancy.objects.all(), many = True)
    return JsonResponse(vacancies.data, safe=False)

class VacancyDetailedView(View):
    def get(self, request, id):
        vacancy = VacancySerializer(get_object_or_404(Vacancy, pk=id))
        return  JsonResponse(vacancy.data)
    
class VacancyTop10View(View):
    def get(self,request):
        vacancies = VacancySerializer(Vacancy.objects.order_by("-salary").all(), many = True)
        return JsonResponse(vacancies.data[:10], safe=False)

class CompanyView(View):
    def get(self, request):
        companies = CompanySerializer(Company.objects.all(), many = True)
        return JsonResponse(companies.data, safe=False)

class CompanyDetailedView(View):
    def get(self, request, id):
        company = CompanySerializer(get_object_or_404(Company, pk=id))
        return JsonResponse(company.data)

class CompanyVacanciesView(View):
    def get(self, request, id):
        vacancies = VacancySerializer(Vacancy.objects.filter(company_id = id).all(), many = True)
        return JsonResponse(vacancies.data, safe=False)




from django import views
from django.urls import path

from api.views import CompanyView, CompanyDetailView, company_vacancies, vacancies_list, VacancyDetailView, top_ten_vacancies

urlpatterns = [
    path('companies/', CompanyView.as_view()),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),
    path('companies/<int:pk>/vacancies/', company_vacancies),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
]
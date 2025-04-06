from django.urls import path
from .views import CompanyList, CompanyDetail, VacancyList, VacancyDetail, CompanyVacancy, TopTenVacancies

urlpatterns = [
    path('companies/', CompanyList.as_view()),
    path('companies/<int:id>/', CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacancy.as_view()),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:id>/', VacancyDetail.as_view()),
    path('vacancies/top_ten/', TopTenVacancies.as_view()),
]
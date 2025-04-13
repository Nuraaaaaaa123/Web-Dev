from rest_framework import generics 

from api.models import Vacancy , Company 
from api.serializers import CompanySerializer , VacancyModelSerializer 


class CompanyList(generics.ListAPIView) : 
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveAPIView) : 
    lookup_url_kwarg = 'company_id'
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacancyList(generics.ListAPIView) : 
    queryset = Vacancy.objects.all()
    serializer_class = VacancyModelSerializer

class VacancyDetail(generics.RetrieveAPIView) :
    lookup_url_kwarg = 'vacancy_id'
    queryset = Vacancy.objects.all()
    serializer_class = VacancyModelSerializer

class CompanyVacancies(generics.ListAPIView) : 
    serializer_class = VacancyModelSerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Vacancy.objects.filter(company_id=company_id)
    
class TopVacancies(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancyModelSerializer    
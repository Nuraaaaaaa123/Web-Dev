import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt 
from api.models import Company , Vacancy
from api.serializers import CompanySerializer , CompanyModelSerializer
#Company requests :

@csrf_exempt 
def companies_list(request) :
    if request.method == 'GET' :
        companies = Company.objects.all()
        serializer = CompanyModelSerializer(companies , many=True)
        return JsonResponse(serializer.data , safe=False)
    elif request.method == 'POST' : 
        data = json.loads(request.body)
        serializer = CompanyModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data , status=201)
        return JsonResponse(serializer.errors , status=400)    


@csrf_exempt
def company_details(request , company_id=None) : 
    
    try : 
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e : 
        return JsonResponse({'error' : str(e)} , status=404)


    if request.method == 'GET':
        serializer = CompanyModelSerializer(company)
        return JsonResponse(serializer.data , status=200)
    elif request.method == 'PUT' : 
        new_data = json.loads(request.body)
        serializer = CompanyModelSerializer(instance=company,
                                             data=new_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data , status=201)
        return JsonResponse(serializer.errors , status=400)
    elif request.method == 'DELETE' : 
        company.delete()
        return JsonResponse({'message' : 'Company was deleted'})
    

#Vacancy requests : 

@csrf_exempt
def vacancies_list(request) : 
    if request.method == 'GET' : 
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json , safe=False)
    
    elif request.method == 'POST' : 
        data = json.loads(request.body)
        try : 
            company = Company.objects.get(id=data['company'])
        
            vacancy = Vacancy.objects.create(
                name = data['name'], 
                description = data['description'], 
                salary = data['salary'],
                company=company, 
            )
        except Company.DoesNotExist:
            return JsonResponse({'error' : 'Company not found'}, status=404)
        except Exception as e : 
            return JsonResponse({'error' : str(e)}, status=400)
        
        return JsonResponse(vacancy.to_json() , status=201)
    
@csrf_exempt
def vacancy_details(request, vacancy_id) :
    try :
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:     
        return JsonResponse({'error' : str(e)}, status=404)
    
    if request.method == 'GET' :
        return JsonResponse(vacancy.to_json() , status=200)
    
    elif request.method == 'PUT' : 
        new_data = json.loads(request.body)
        company_id = new_data.get('company')
        if company_id is None : 
            return JsonResponse({'error' : 'company_id is required'} , status=400)
        
        company = Company.objects.get(id = company_id)
        vacancy.name = new_data['name']
        vacancy.description = new_data['description']
        vacancy.salary = new_data['salary']
        vacancy.company = company
        vacancy.save()
        
        return JsonResponse(vacancy.to_json() , status=200)
    
    elif request.method == 'DELETE' : 
        vacancy.delete()
        return JsonResponse({'message' : 'Vacancy was deleted'})

@csrf_exempt
def topTen_vacancies(request) :
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse([v.to_json() for v in vacancies] , safe= False)



@csrf_exempt
def company_vacancies(request , company_id=None) : 
    company = Company.objects.get(id=company_id)
    vacancies = company.vacancies.all()
    return JsonResponse([v.to_json() for v in vacancies], safe=False)
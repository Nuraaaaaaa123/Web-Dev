import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://127.0.0.1:8000/api';
  constructor(private client: HttpClient) { }

  getCompanyList(): Observable<Company[]>{
    return this.client.get<Company[]>(
      `${this.BASE_URL}/companies/`
    )
  }


  getVacancies(companyId: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/companies/${companyId}/vacancies/`
    );
  }
}
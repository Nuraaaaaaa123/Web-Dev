import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Vacancy } from '../vacancy';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgFor, RouterLink],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit{
 
  constructor(
    private route: ActivatedRoute, 
    private router: RouterModule, 
    private companyService: CompanyService
  ) {}
  
  vacancies!: Vacancy[];
  companyId!: number
  
  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      this.companyId = Number(routeParams.get('companyId')) // || 'news';
      this.getVacancies(this.companyId);
  }

  getVacancies(companyId: number) {
    this.companyService.getVacancies(companyId).subscribe((vac: Vacancy[]) => {
      this.vacancies = vac;
    });
  }
}
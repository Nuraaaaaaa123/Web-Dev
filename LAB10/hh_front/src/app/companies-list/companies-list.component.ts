import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgFor, RouterLink],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.css'
})
export class CompaniesListComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute, 
    private router: RouterModule, 
    private companyService: CompanyService
  ) {}
  
  companies!: Company[];

  ngOnInit(): void {
      this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanyList().subscribe((comp: Company[]) => {
      this.companies = comp;
    });
  }
}
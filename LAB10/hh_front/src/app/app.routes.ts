import { Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: 'companies', pathMatch: 'full'},
    {path: 'companies', component: CompaniesListComponent, pathMatch: 'full'},
    {path: 'companies/:companyId', component: CompanyDetailComponent},
    // {path: '**', redirectTo: 'companies'},
];
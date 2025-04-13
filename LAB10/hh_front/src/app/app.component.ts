import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, CompaniesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
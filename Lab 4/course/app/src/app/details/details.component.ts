import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo"
      [src]="housingLocation?.photo">

      <section class="lising-description">
        <h2 class="lising-heading">
          {{housingLocation?.name}}
        </h2>

        <p class="listing-location">
          {{housingLocation?.city}}, {{housingLocation?.state}}
        </p>

      </section>

      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
      
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Wifi? {{housingLocation?.wifi}} </li>
          <li>Laundry? {{housingLocation?.laundry}} <li>
        </ul>
      </section>

       <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        

        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id = "first-name" type="text" formControlName="firstName">
          
          <label for="last-name">Last Name</label>
          <input id = "last-name" type="text" formControlName="lastName">
        
          <label for="email">email</label>
          <input id = "email" type="email" formControlName="email">

          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>

    </article>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  //housingLocationId = 0;

  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
      console.log(this.housingLocation?.photo);
    });
    console.log(housingLocationId);
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}

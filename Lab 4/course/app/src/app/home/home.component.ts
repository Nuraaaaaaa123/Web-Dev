import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../housing-location';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, NgFor],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>

        <!--filteredResults(filter.value)-->

        <button class="primary" type="button" (click)="filteredResults(filter.value)">Search</button>
      </form>

    </section>

    <section class="results">
      <app-housing-location *ngFor = "let housingLocation of
      filteredLocationList" [housingLocation]="housingLocation">
      
    </app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})




export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(
    HousingService
  );

  
  filteredLocationList:HousingLocation[] = [];
  constructor(){
    console.log("home components is working");
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  sometest(){
    console.log("button is pressed");
  }

  filteredResults(text: string){
    if(!text) this.filteredLocationList = this.housingLocationList;

    console.log("Input is: " + text);
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}

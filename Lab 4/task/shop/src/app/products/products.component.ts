import { Component, Input } from '@angular/core';
import { ProductsInterface } from '../products-interface';

@Component({
  selector: 'app-products',
  imports: [],
  //templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  template:`
    <div class="content">
      <p class="name"> name : {{products.name}} </p>
      <img [src]="products.img1" class="img">
      <p> rating: {{products.rating}} </p>
      <p> 
        description:<br>
        {{products.description}}
      </p>
      <a [href]="products.url">Details</a>
    </div>
  `
})
export class ProductsComponent {
  @Input() products!:ProductsInterface;
}

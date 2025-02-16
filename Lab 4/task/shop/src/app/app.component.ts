import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsInterface } from './products-interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, ProductsComponent],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template:`
    <h1>
      Products:
    </h1>

    <div class="products">
      <app-products class="elements" *ngFor="let k of productslist" [products]="k">
      </app-products>

  </div>
  `
})

export class AppComponent {
  title = 'shop';
  productslist:ProductsInterface[] = [
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "fen",
      "description": "good fen",
      "rating": 4.7,
      "url": "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "smartphone",
      "description": "good smartphone",
      "rating": 4.8,
      "url": "https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "hleb",
      "description": "good hleb",
      "rating": 4.9,
      "url": "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/hfc/h08/86391984357406.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "jag",
      "description": "good jag",
      "rating": 5,
      "url": "https://kaspi.kz/shop/p/liker-jagermeister-desertnyi-35-1-l-102074847/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "fen",
      "description": "good fen",
      "rating": 4.7,
      "url": "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "smartphone",
      "description": "good smartphone",
      "rating": 4.8,
      "url": "https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "hleb",
      "description": "good hleb",
      "rating": 4.9,
      "url": "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/hfc/h08/86391984357406.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "jag",
      "description": "good jag",
      "rating": 5,
      "url": "https://kaspi.kz/shop/p/liker-jagermeister-desertnyi-35-1-l-102074847/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "fen",
      "description": "good fen",
      "rating": 4.7,
      "url": "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000"
    },
    {
      'img1' : "https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium",
      'img2' : "123",
      'name': "smartphone",
      "description": "good smartphone",
      "rating": 4.8,
      "url": "https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000"
    }
  ];

}
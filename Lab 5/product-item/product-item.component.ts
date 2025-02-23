import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>(); 

  likeProduct() {
    this.like.emit(this.product.id);
  }

  removeProduct() {
    this.remove.emit(this.product.id); 
  }
  shareOnWhatsApp() {
    const message = `🔥 Смотри, какой крутой товар: ${this.product.name}!\n${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
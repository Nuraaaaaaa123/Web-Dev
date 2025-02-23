import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() like = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onLike(productId: number) {
    this.like.emit(productId);
  }

  onRemove(productId: number) {
    this.remove.emit(productId);
  }
}
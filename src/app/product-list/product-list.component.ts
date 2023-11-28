import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, UpdateMode } from '../types/model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<{product:Product,mode:UpdateMode}> = new EventEmitter();

  addToCart(product: Product) {
    product.selected = !product.selected;
    this.onAddToCart.emit(product);
  }

  increaseQuantity(product: Product) {
    this.onQuantityUpdate.emit({product,mode :UpdateMode.Add});
  }

  decreaseQuantity(product: Product) {
    this.onQuantityUpdate.emit({product,mode :UpdateMode.Sub});
  }
}

import { Component, Input } from '@angular/core';
import { CartItem } from '../types/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cartItems: CartItem[] = [];
}

import { Component } from '@angular/core';
import { CartItem, Product, UpdateMode } from './types/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, image: 'path/to/image1.jpg', cartQuantity: 0, selected : false },
    { id: 2, name: 'Product 2', price: 15, image: 'path/to/image2.jpg', cartQuantity: 0, selected : false },
    { id: 3, name: 'Product 3', price: 20, image: 'path/to/image2.jpg', cartQuantity: 0, selected : false },
    { id: 4, name: 'Product 4', price: 25, image: 'path/to/image2.jpg', cartQuantity: 0, selected : false },
    { id: 5, name: 'Product 5', price: 35, image: 'path/to/image2.jpg', cartQuantity: 0, selected : false },
  ];

  cartItems: CartItem[] = []; // Initialize an empty cart

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ id: product.id, item: product.name, quantity: 1 });
    }
    product.cartQuantity++;
  }

  updateQuantity(info: {product:Product,mode:UpdateMode}) {

    if(info.mode == UpdateMode.Add)
    {
      const cartItem = this.cartItems.find(item => item.id === info.product.id);
      if (cartItem) {
        cartItem.quantity++;
        info.product.cartQuantity++;
      }
    }
    else if(info.mode == UpdateMode.Sub)
    {
      const cartItem = this.cartItems.find(item => item.id === info.product.id);
      if (cartItem) {
        if (cartItem.quantity === 1) {
          const cartItemIndex = this.cartItems.findIndex(item => item.id === info.product.id);
          this.cartItems.splice(cartItemIndex,1);
          info.product.cartQuantity = 0;
          info.product.selected = !info.product.selected;
        } else {
          cartItem.quantity--;
          info.product.cartQuantity--;
        }
      }
    }
    
    
  }

  // decreaseQuantity(product: Product) {
  //   const cartItem = this.cartItems.find(item => item.id === product.id);
  //   if (cartItem) {
  //     if (cartItem.quantity === 1) {
  //       this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  //       product.cartQuantity = 0;
  //     } else {
  //       cartItem.quantity--;
  //       product.cartQuantity--;
  //     }
  //   }
  // }
}

// product.model.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    cartQuantity: number;
    selected:boolean;
  }
  
  // cart-item.model.ts
  export interface CartItem {
    id: number;
    item: string;
    quantity: number;
  }
  
  export enum UpdateMode{
    Add,
    Sub,
    Null
  }
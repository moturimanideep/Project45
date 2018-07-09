import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cartProducts: any;
  constructor() { }

  addDataFromProducts(data: any): any{
    this.cartProducts = data;
    console.log(this.cartProducts);
  }
  passDataToCart(): any{
    return this.cartProducts;
  }
}

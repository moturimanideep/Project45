import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cartProducts: any;
  constructor(private http: HttpClient) { }

  addDataFromProducts(data: any): any{
    this.cartProducts = data;
    console.log(this.cartProducts);
  }
  passDataToCart(): any{
    return this.cartProducts;
  }
  RegisterUser(data: any): Observable<any>{
    let url = "https://servicecity1.herokuapp.com/userReg";
    return this.http.post(url, data);
  }
  loginUser(data: any): Observable<any>{
    let url = "https://servicecity1.herokuapp.com/log";
    return this.http.post(url, data);
  }

  StorageData(user: any){
    let user1 = JSON.stringify(user);
    localStorage.setItem('USER', user1 );
  }
}

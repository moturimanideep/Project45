import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[]= [];
  constructor(private commonService: CommonService) {
   this.cartProducts =  this.commonService.passDataToCart();
   }

  ngOnInit() {
    
  }

}



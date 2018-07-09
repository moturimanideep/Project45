import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input('id') customerId: any;
  @Input('product') customerProduct: any;
  @Input('name') customerName: any;
  @Output() sendRecord: any = new EventEmitter();
  constructor() {
    
   }

  ngOnInit() {
  }

  selectCustomer(){
    let selectedCustomer = {
      customername: this.customerName,
      customerid: this.customerId,
      customerproduct: this.customerProduct
    }
    this.sendRecord.emit(selectedCustomer);
  }

}

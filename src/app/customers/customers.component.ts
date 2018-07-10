import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any[] =  [
    {cname: 'Mahesh', cid: '#001233', cproduct: 'Redmi Note 5 (Black, 64 GB)  (4 GB RAM)' },
    {cname: 'Kumar', cid: '#0012222', cproduct: 'Samsung Galaxy On Nxt (Black, 16 GB)  (3 GB RAM)' },
    {cname: 'Rakesh', cid: '#001111', cproduct: 'Redmi Note 5 (Black, 64 GB)  (4 GB RAM)' },
    {cname: 'Bharghav', cid: '#005678', cproduct: 'Samsung Galaxy On Nxt (Black, 16 GB)  (3 GB RAM)' }
  ];
  selectedCustomer: any;
  constructor() { }

  ngOnInit() {
  }

  getRecord(data: any){
    this.selectedCustomer = data;
  }

}

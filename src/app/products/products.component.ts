import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cartProducts: any[] = [];
  products: any = [
    {
      imageSrc: 'https://rukminim1.flixcart.com/image/312/312/j1qqs280/mobile/m/7/d/samsung-galaxy-on-nxt-sm-g610fzdhins-original-imaet97hmqvfn5a6.jpeg?q=70',
      name: 'Samsung Galaxy On Nxt (Gold, 64 GB)  (3 GB RAM)',
      price: '₹10,900',
      description: {
        ram: '3 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
        display: '5.5 inch Full HD Display',
        camera: '13MP Rear Camera | 8MP Front Camera',
        battery: '3300 mAh Li-ion Battery',
        processor: 'Exynos 7870 Octa Core 1.6 GHz Processor',
        warranty: 'Brand Warranty of 1 Year'
      }
    },
    {
      imageSrc: 'https://rukminim1.flixcart.com/image/312/312/j1qqs280/mobile/m/7/d/samsung-galaxy-on-nxt-sm-g610fzdhins-original-imaet97hmqvfn5a6.jpeg?q=70',
      name: 'Redmi Note 5 (Black, 64 GB)  (4 GB RAM)',
      price: '₹10,900',
      description: {
        ram: '3 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
        display: '5.5 inch Full HD Display',
        camera: '13MP Rear Camera | 8MP Front Camera',
        battery: '3300 mAh Li-ion Battery',
        processor: 'Exynos 7870 Octa Core 1.6 GHz Processor',
        warranty: 'Brand Warranty of 1 Year'
      }
    },
    {
      imageSrc: 'https://rukminim1.flixcart.com/image/312/312/j1qqs280/mobile/m/7/d/samsung-galaxy-on-nxt-sm-g610fzdhins-original-imaet97hmqvfn5a6.jpeg?q=70',
      name: 'Samsung Galaxy On Nxt (Black, 16 GB)  (3 GB RAM)',
      price: '₹10,900',
      description: {
        ram: '3 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
        display: '5.5 inch Full HD Display',
        camera: '13MP Rear Camera | 8MP Front Camera',
        battery: '3300 mAh Li-ion Battery',
        processor: 'Exynos 7870 Octa Core 1.6 GHz Processor',
        warranty: 'Brand Warranty of 1 Year'
      }
    }
  ];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  addToCart(data: any){
    this.cartProducts.push(data);
    this.commonService.addDataFromProducts(this.cartProducts);
  }

}

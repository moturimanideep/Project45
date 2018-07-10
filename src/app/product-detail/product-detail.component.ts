import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: any = [
    {
      id: 1001,
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
      id: 1002,
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
      id: 1003,
      imageSrc: 'https://rukminim1.flixcart.com/image/312/312/j1qqs280/mobile/m/7/d/samsung-galaxy-on-nxt-sm-g610fzdhins-original-imaet97hmqvfn5a6.jpeg?q=70',
      name: 'IPhone 6S (Rs 45, 000)',
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
  _id: any;
  selectedproduct: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params._id;
    this.displaySelectedMobile(this._id);
    }

    displaySelectedMobile(id: any){
      this.products.forEach( (product) => { 
        if(product.id == this._id){
          this.selectedproduct = product;

        }
      })
    }

}

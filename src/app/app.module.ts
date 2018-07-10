import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule, MatButtonModule, MatListModule, MatDividerModule} from '@angular/material';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
// import { AuthModule} from './auth/auth.module';
// import { AdminModule } from './admin/admin.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { ProductDetail3Component } from './product-detail3/product-detail3.component';
const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductsComponent, children: [
    {path: 'product-detail/:_id', component: ProductDetailComponent},
    {path: 'product-detail2', component: ProductDetail2Component},
    {path: 'product-detail3', component: ProductDetail3Component}
  ]},
  {path: 'profile', component: ProfileComponent},
  {path: 'employees', component: EmployeesComponent}, 
  {path: 'cart', component: CartComponent}, 
  {path: 'customers', component: CustomersComponent}, 
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  // {path: 'products/product-detail/:_id', component: ProductDetailComponent}, 
  {path: '**', redirectTo: ''}

]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent, HeaderComponent, ProductsComponent, ProfileComponent, EmployeesComponent, CartComponent, CustomersComponent, CustomerDetailsComponent, ProductDetailComponent, ProductDetail2Component, ProductDetail3Component
  ],
  imports: [
    BrowserModule, MatCardModule, MatButtonModule, MatListModule, MatDividerModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

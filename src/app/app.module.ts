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
import { AuthModule} from './auth/auth.module';
const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'employees', component: EmployeesComponent}, 
  {path: 'cart', component: CartComponent}, 
  {path: 'customers', component: CustomersComponent}, 
  {path: '**', redirectTo: ''}

]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent, HeaderComponent, ProductsComponent, ProfileComponent, EmployeesComponent, CartComponent, CustomersComponent, CustomerDetailsComponent
  ],
  imports: [
    BrowserModule, MatCardModule, MatButtonModule, MatListModule, MatDividerModule, RouterModule.forRoot(routes), AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule, MatButtonModule, MatListModule, MatDividerModule} from '@angular/material';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent, HeaderComponent, ProductsComponent, ProfileComponent, EmployeesComponent
  ],
  imports: [
    BrowserModule, MatCardModule, MatButtonModule, MatListModule, MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

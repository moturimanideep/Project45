import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent}

]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), MatInputModule, MatCardModule, FormsModule, MatButtonModule, ReactiveFormsModule, HttpClientModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }

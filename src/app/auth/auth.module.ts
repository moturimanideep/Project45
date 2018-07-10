import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule, Router } from '@angular/router';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent}

]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }

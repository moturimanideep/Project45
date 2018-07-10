import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { Routes, RouterModule, Router } from '@angular/router';
const routes: Routes = [
  {path: '', component: AdminpageComponent}

]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [AdminpageComponent]
})
export class AdminModule { }

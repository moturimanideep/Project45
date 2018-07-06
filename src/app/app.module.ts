import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule, MatButtonModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent, HeaderComponent
  ],
  imports: [
    BrowserModule, MatCardModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

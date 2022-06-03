import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo:'home'},
      {path:'home', component:HomeComponent},
      {path:'burgers', component:FoodComponent},
      {path:'cart', component:CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

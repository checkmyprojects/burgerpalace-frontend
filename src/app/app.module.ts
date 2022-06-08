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
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { AdComponent } from './ad/ad.component';
import { SignupComponent } from './signup/signup.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { CartComponent } from './cart/cart.component';
import { FixedmenuComponent } from './fixedmenu/fixedmenu.component';
@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    AdComponent,
    SignupComponent,
    SignupformComponent,
    LoginComponent,
    LoginformComponent,
    CartComponent,
    FixedmenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo:'home'},
      {path:'home', component:HomeComponent},
      {path:'burgers', component:FoodComponent},
      {path:'signup', component:SignupComponent},
      {path:'login', component:LoginComponent},
      {path:'cart', component:CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

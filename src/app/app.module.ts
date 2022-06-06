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
@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    AdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo:'home'},
      {path:'home', component:HomeComponent},
      {path:'burgers', component:FoodComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

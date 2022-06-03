import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '/home',
    component: HomeComponent
  },
  {
    path: '/burgers',
    component: FoodComponent
  },
  {
    path: '/cart',
    component: CartComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
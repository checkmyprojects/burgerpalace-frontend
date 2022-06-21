import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SandwichesComponent } from './sandwiches/sandwiches.component';

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
    path: '/signup',
    component: SignupComponent
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/cart',
    component: CartComponent
  },
  {
    path: '/sandwiches',
    component: SandwichesComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
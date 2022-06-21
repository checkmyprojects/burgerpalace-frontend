import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../model/food';
import { CartService } from '../service/cart.service';
import { FoodService } from '../service/food.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.css']
})
export class SandwichesComponent implements OnInit {
  public foods: Food[] = [];
  currentUser: any;
  constructor(private activatedRoute: ActivatedRoute,private foodService: FoodService, private cartService:CartService,private router:Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getFoods();
    this.currentUser = this.token.getUser();
    console.log("Current user is:" + this.currentUser);
    console.log(this.currentUser);
  }
  public getFoods(): void{
    this.foodService.getFoodByCategoryName('sandwich').subscribe({
      next: (response: Food[]) => {
        this.foods = response;
        console.log(this.foods);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public addToCart(food:Food):void{
    this.cartService.addToCart(food);
    //this.router.navigateByUrl('/cart')
  }
}

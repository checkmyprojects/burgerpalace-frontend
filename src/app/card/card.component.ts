import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';
import { Cart } from '../model/cart';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public foods: Food[] = [];
  public cart:Cart[]=[];
 /* public addToCart(food_id:string, quantity:number){
    this.cart.push({
      'food_id':food_id,
      'quantity':quantity
    })
  }*/
  constructor( private foodService: FoodService, private cartService:CartService) { }

  ngOnInit(): void {
    this.getFoods();
  }

  public getFoods(): void{
    this.foodService.getAllFood().subscribe({
      next: (response: Food[]) => {
        this.foods = response;
        console.log(this.foods);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public addItemToCart():void{
    this.cartService.cart;
  }


}

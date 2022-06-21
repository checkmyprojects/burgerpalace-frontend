import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';
import { Cart } from '../model/cart';
import { CartService } from '../service/cart.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  food!:Food;
  public foods: Food[] = [];
  public cart:Cart[]=[];
  constructor(private activatedRoute: ActivatedRoute,private foodService: FoodService, private cartService:CartService,private router:Router) {
   }

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
  public addToCart(food:Food):void{
    this.cartService.addToCart(food);
    //this.router.navigateByUrl('/cart')
  }


}

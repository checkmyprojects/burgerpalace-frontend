import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public foods: Food[] = [];

  constructor( private foodService: FoodService) { }

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

}

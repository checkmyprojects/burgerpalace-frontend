import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

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

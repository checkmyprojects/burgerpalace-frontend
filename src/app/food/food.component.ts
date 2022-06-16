import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  public foods: Food[] = [];
  currentUser: any;
  constructor( private foodService: FoodService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getFoods();
    this.currentUser = this.token.getUser();
    console.log("Current user is:" + this.currentUser);
    console.log(this.currentUser);
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

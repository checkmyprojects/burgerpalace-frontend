import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Food } from '../model/food';
import { User } from '../model/user';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }
  public getUserData(data:NgForm):void{

    const user : User = {
      name: data.value.name +" " +data.value.surname,
      address: data.value.address,
      username: data.value.email,
      phone: data.value.phone,
      password: data.value.password
    };

    console.log(user);
  }
  public createUser(data:NgForm): void{
    const user : User = {
      name: data.value.name +" " +data.value.surname,
      address: data.value.address,
      username: data.value.email,
      phone: data.value.phone,
      password: data.value.password
        };
        console.log(data)
    this.foodService.registerUser(user).subscribe({
      next: (response: User) => {
        console.log(user);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}

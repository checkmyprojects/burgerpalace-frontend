import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Food } from '../model/food';
import { User } from '../model/user';
import { FoodService } from '../service/food.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  form: any = {
    name: null, 
    address: null, 
    username: null, 
    phone: null, 
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private foodService: FoodService, private authService: AuthService, public router: Router) { }

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

  onSubmit(): void {
    const { name, address, username, phone, password } = this.form;
    this.authService.register(name, address, username, phone, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
    this.router.navigate(['/login']);
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

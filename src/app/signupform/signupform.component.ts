import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Food } from '../model/food';
import { User } from '../model/user';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  public getUserData(data:NgForm):void{

    const user : User = {
      name: data.value.name +" " +data.value.surname,
      address: data.value.address,
      email: data.value.email,
      phone: data.value.phone,
      password: data.value.password
    };

    console.log(user);
  }

}

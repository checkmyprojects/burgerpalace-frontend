import { Component, OnInit, Optional } from '@angular/core';
import { User } from '../model/user';
import { FoodService } from '../service/food.service';
import { Orders } from '../model/orders';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

}

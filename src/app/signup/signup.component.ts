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
  //let user2:User = [User];
  public user:User={
    name:"Iris",
    address: "Barcelona",
    email: "iris@gmail.com",
    phone: "697151263",
    password: "1234567",
    role: "ROLE_USER",
    // order
    order: undefined
  };
  saveEmployee(signupform: NgForm): void {
    this.foodService.registerUser(this.user).subscribe(
      (data: User) => {
        // log the employee object after the post is completed
        console.log(data);
        signupform.reset();
        this._router.navigate(['userList']);
      },
      (error: any) => { console.log(error); }
    );
  }

}

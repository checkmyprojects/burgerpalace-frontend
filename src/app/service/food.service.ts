import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../model/cartItem';
import { Food } from '../model/food';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllFood(): Observable<Food[]>{
    return this.http.get<Food[]>(`${this.apiServerUrl}/api/food`);
  }

  public getFoodByCategoryName(categoryName: string): Observable<Food[]>{
    return this.http.get<Food[]>(`${this.apiServerUrl}/api/food/filter/${categoryName}`);
  }
  
  public checkout(order:CartItem[]):Observable<CartItem[]>{

    // console.log("On Service");
    // console.log(order);
    // let cartToBackend: OrderToBackend[]=[];;
    
    // order.forEach((item)=>{
      
    //   const itemToPush: OrderToBackend = {
    //     food_id: 0,
    //     quantity: 0,
    //   };
    //   itemToPush.food_id = item.food.id;
    //   itemToPush.quantity = item.quantity;
    //   cartToBackend.push(itemToPush);
    //   console.log("ItemToPush: ");
    //   console.log(itemToPush);
    // })
    // console.log("CartToBackend: ");
    // console.log(cartToBackend);
    // return this.http.post<OrderToBackend[]>(`${this.apiServerUrl}/api/orders/3/checkout`, cartToBackend);
    return this.http.post<CartItem[]>(`${this.apiServerUrl}/api/orders/3/checkout`, order);
  }

  public registerUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/api/users/save`, user)
  }
  /*
  public addFood(food:Food):Observable<Food>{
    return this.http.post<Food>(`${this.apiServerUrl}/food/add`, food{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }*/

}

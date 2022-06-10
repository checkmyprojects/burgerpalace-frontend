import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
  
  public registerUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user)
    .pipe(
      catchError(this.handleError('registerUser',user))
    )
    
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

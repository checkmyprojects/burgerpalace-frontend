import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllFood(): Observable<Food[]>{
    return this.http.get<Food[]>(`${this.apiServerUrl}/food/all`);
  }
}

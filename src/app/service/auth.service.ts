import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOptionsLogin = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let creds = "username=" + username + "&password=" + password;
    return this.http.post(AUTH_API + 'login', creds, httpOptionsLogin);
    // return this.http.post(AUTH_API + 'login', {
    //   username, 
    //   password
    // }, httpOptionsLogin);
  }

  register(name: string, address: string, username: string, phone: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'users/save', {
      name, 
      address, 
      username, 
      phone, 
      password
    }, httpOptions);
  }

}

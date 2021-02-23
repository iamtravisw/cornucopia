import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loggedIn = false;
  readonly BaseUri = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('bearer')
    })
  }

  login(userForm: any){
    const user: User = {
      userName: userForm.value.userName,
      password: userForm.value.password
    };
    return this.http.post(this.BaseUri+'/api/user/login', user)
  }

  register(registerBasic: any, registerUser: any){
    const user: User = {
      firstName: registerBasic.value.firstName,
      lastName: registerBasic.value.lastName,
      phone: registerBasic.value.phone,
      userName: registerUser.value.userName,
      email: registerUser.value.email,
      password: registerUser.value.password,
      lastLogin: new Date(Date.now())
    };
    return this.http.post(this.BaseUri+'/api/user/register', user)
  }

}

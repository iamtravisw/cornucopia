import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  readonly BaseUri = "http://localhost:8080/api/user";
  loggedIn: Boolean = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' +localStorage.getItem('Bearer')!
    })
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
    return this.http.post(this.BaseUri+'/register', user)
  }

  login(userForm: any){
    const user: User = {
      userName: userForm.value.userName,
      password: userForm.value.password,
    };
    return this.http.post(this.BaseUri+'/login', user)
  }

  getUserById(userId: number){
    return this.http.get(this.BaseUri+'/retrieve/id/'+userId)
  }

  getUserByUserName(userName: string){
    return this.http.get(this.BaseUri+'/retrieve/username/'+userName)
  }

  editUser(editedUser: any){
    const user: User = {
      userId: +localStorage.getItem('UserId')!,
      displayName: editedUser.value.displayName,
      tagLine: editedUser.value.tagLine,
      biography: editedUser.value.biography
    };
    console.log(user)
    return this.http.put(this.BaseUri+'/edit', user)
  }

  
}

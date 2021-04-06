import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  readonly BaseUri = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('bearer')
    })
  }

  getAllIngredientsForUser(userId: number){
    return this.http.get(this.BaseUri+'/api/ingredient/retrieve/all/'+userId)
  }

}

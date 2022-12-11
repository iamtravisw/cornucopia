import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient-model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  readonly BaseUri = "http://localhost:8080";
  readonly userId = +localStorage.getItem('UserId')!;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +localStorage.getItem('Bearer')
    })
  }

  tabIndex = 0;
  rowToEdit: any;

  setTabIndex(index: number){
    this.tabIndex = index;
  }

  setRowToEdit(row: any){
    this.rowToEdit = row;
  }

  getAllIngredientsForUser() {
    return this.http.get(this.BaseUri + '/api/ingredient/retrieve/all/' + this.userId)
  }

  getUnits() {
    return this.http.get(this.BaseUri + '/api/ingredient/units')
  }

  getCuisines() {
    return this.http.get(this.BaseUri + '/api/recipe/cuisines')
  }

  getTemps() {
    return this.http.get(this.BaseUri + '/api/recipe/temps')
  }

  getTimes() {
    return this.http.get(this.BaseUri + '/api/recipe/times')
  }

  addIngredient(ingredientForm: any, image: any) {
    const ingredient: Ingredient = {
      ingredientName: ingredientForm.value.ingredientName,
      imageUrl: image,
      quantity: ingredientForm.value.quantity,
      unitMeasurement: ingredientForm.value.unit,
      warningLow: ingredientForm.value.warningLow,
      note: ingredientForm.value.note,
      user: {userId: this.userId} 
    };
    return this.http.post(this.BaseUri + '/api/ingredient/add', ingredient)
  }

  editIngredient(ingredientForm: any, image: any, id: number) {
    const ingredient: Ingredient = {
      ingredientId: id,
      ingredientName: ingredientForm.value.ingredientName,
      imageUrl: image,
      quantity: ingredientForm.value.quantity,
      unitMeasurement: ingredientForm.value.unit,
      warningLow: ingredientForm.value.warningLow,
      note: ingredientForm.value.note,
      user: {userId: this.userId} 
    };
    return this.http.put(this.BaseUri + '/api/ingredient/edit', ingredient)
  }

  deleteIngredient(id: number) {
    return this.http.delete(this.BaseUri + '/api/ingredient/delete/'+id)
  }

}

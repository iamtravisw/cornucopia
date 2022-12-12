import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly BaseUri = "http://localhost:8080/api/image";

  constructor(private http: HttpClient) { }

  uploadProfileImage(image: File){
    let userId: number = +localStorage.getItem('UserId')!
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post(this.BaseUri+'/profile/'+userId, formData);
  }

  uploadIngredientImage(image: File, ingredientId?: number){
    const formData = new FormData();
    formData.append('file', image);
    if(ingredientId){
      return this.http.post(this.BaseUri+'/ingredient/'+ingredientId, formData);
    }
    return this.http.post(this.BaseUri+'/ingredient/'+0, formData);
  }

  uploadRecipeImage(image: File, recipeId?: number){
    const formData = new FormData();
    formData.append('file', image);
    if(recipeId){
      return this.http.post(this.BaseUri+'/recipe/'+recipeId, formData);
    }
    return this.http.post(this.BaseUri+'/recipe/'+0, formData);
  }
}

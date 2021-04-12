import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly BaseUri = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  uploadImage(image: File){
    let userId: number = +localStorage.getItem('UserId')!
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post(this.BaseUri+'/file/write/image/'+userId, formData);
  }
}

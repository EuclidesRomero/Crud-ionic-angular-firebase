import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  constructor(private http: HttpClient) { }
  getArtis(): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}

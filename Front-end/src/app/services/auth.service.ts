import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  signInUser(user:any){
    return this.http.post<any>(this.URL + '/login', user); 
  }
}

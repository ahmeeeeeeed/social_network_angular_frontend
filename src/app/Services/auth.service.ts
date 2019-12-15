import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private _router: Router) { }

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} 

  logoutUser() {
    localStorage.removeItem('connected_user')
    this._router.navigate(['signin'])
  }

  getToken() {
    return localStorage.getItem('connected_user')
  }

  loggedIn() {
    return !!localStorage.getItem('connected_user')    
  }

  generateToken():Observable<string> {
    return this.http.post<string>("api/pi_social_network-web/rest/authentication",null ,this.httpOptions)
  
  
  }
   
}

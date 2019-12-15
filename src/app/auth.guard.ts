import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
    private _router: Router) { }
  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
    // console.log(window.location.pathname)  
     // console.log('true')
      return true
    }else if(this._authService.loggedIn() && localStorage.getItem('banne')){
      this._router.navigate(['signin'])
      return false
    }
     else {
     // console.log('false')   
    // console.log(window.location.pathname)         
      this._router.navigate(['signin'])
      return false
    }
  }
 
 
  
}

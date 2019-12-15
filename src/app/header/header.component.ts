import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
connectedUser = new User();
  constructor(private _auth :AuthService,private _router: Router) { }
  
  ngOnInit() {
    this.connectedUser = JSON.parse( localStorage.getItem('connected_user'))
    console.log("in header :"+this.connectedUser)

    //window.location.replace('')
    
  }

  logout(){

    this._auth.logoutUser()
  }

  goToStat(){

    this._router.navigate['statistique']
  }
  goToHomePage(){
    window.location.replace('home')
  }
}

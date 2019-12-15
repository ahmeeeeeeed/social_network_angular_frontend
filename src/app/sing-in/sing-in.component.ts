import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from '../Services/reclamation.service';
import { AuthService } from '../Services/auth.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  constructor(private router : Router,private service : ReclamationService,private _auth :AuthService ) { }

  badCredentiel = false
  ngOnInit() {
  }
user = new User()
banned = false
  login(email,password){
    this.banned=false 
          this.badCredentiel =false

    this.service.getUserByEmailAndPassword(email,password).subscribe(res =>{
     // console.log(res)
//this.router.navigate(['home']);
     // if(res!=null ){
      
        this.user=res
        localStorage.setItem('connected_user',JSON.stringify( this.user))

        if(localStorage.getItem('connected_user') && this.user.isActive==true){
         // this.router.navigate(['home']);
         localStorage.removeItem('banne')
         window.location.replace('home')
        }
        else if(this.user.isActive==false) {
          localStorage.setItem('banne',"banne")
          console.log("if(this.user.isActiv==false)")
            this.banned=true
            localStorage.removeItem('connected_user')
        }
        else{
          console.log("else")
          this.badCredentiel=true
        }
         
      })
      setTimeout(() => {
        if(this.user.isActive==false)
              this.banned=true
        else
         this.badCredentiel=true
      }, 1000);
     
      this._auth.generateToken().subscribe(res =>{
        console.log(res)
       // localStorage.setItem('token',JSON.stringify(res))
       localStorage.setItem('token',"err")
        
      }, err=>{
       // console.log(err)
       // localStorage.setItem('token',err)
      })
     // else{
     //   console.log("donnees incorrectes")
      //}
   // }
    
    
  
  }


}

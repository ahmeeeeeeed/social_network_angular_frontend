import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AuthGuard } from './auth.guard';
import { LoaderComponent } from './loader/loader.component';


/*const component :any  = HomeComponent;
if(localStorage.getItem('connected_user')  ==null){
this.component = SingInComponent
}*/

const routes: Routes = [ 
  {path:'statistique', component : StatistiquesComponent,canActivate:[AuthGuard]},
  {path:'', component : LoaderComponent },
  {path:'home', component : HomeComponent,canActivate:[AuthGuard]},
  {path:'signin', component : SingInComponent},
  {path:'error', component : Error404Component},
  {path:'**', redirectTo : 'error',pathMatch : 'full'}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

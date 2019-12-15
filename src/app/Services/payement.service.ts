import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payement } from '../Model/payement';

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  constructor(private http: HttpClient) { }

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} 
  payer(numcart,mail,mois,annee,cvv,idUser) {
    return this.http.post("api/pi_social_network-web/rest/payement/payer_premium?idUser="+idUser+"&numeroCarte="+numcart+"&numCVV="+cvv+"&montant=200&year="+annee+"&mounth="+mois, null,this.httpOptions )
  
  
  } 
  payerPourPublier(numcart,mail,mois,annee,cvv,idUser) {
    console.log("payerPourPublier()")
    return this.http.post("api/pi_social_network-web/rest/payement/payer_pub?idUser="+idUser+"&numeroCarte="+numcart+"&numCVV="+cvv+"&year="+annee+"&mounth="+mois+"&montant=200", null,this.httpOptions )

  } // 4242424242424242
  getNbrPublicationUserParMois( idUser:number, mois:number){
    return this.http.get("api/pi_social_network-web/rest/payement/nbr_pub_user_par_mois?idUser="+idUser+"&mois="+mois )

  }
  testPremuim(idUser){
    return this.http.get("api/pi_social_network-web/rest/payement/test_valid_compte_2?idUser="+idUser)
  
  }
  getPayementByIdUser(id): Observable<Payement[]> {

    return this.http.get<Payement[]>("api/pi_social_network-web/rest/payement/payement_history?idUser="+id)
  
  }
}

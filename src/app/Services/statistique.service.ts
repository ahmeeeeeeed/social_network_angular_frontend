import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { Offre } from '../Model/offre';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private http: HttpClient) {}

 // Http Options
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

getNbrUserPostuleAOffre(idOffre) :Observable<any> {//
  //console.log(this.http.get<any>("api/pi_social_network-web/rest/statistique/nbr_user_postuler_a_offre?idOffre="+idOffre))

  return this.http.get<any>("api/pi_social_network-web/rest/statistique/nbr_user_postuler_a_offre?idOffre="+idOffre)
}

getNbrPublicationOffreParMois(id,mois) :Observable<any> {//
 // console.log(this.http.get<any>("api/pi_social_network-web/rest/statistique/nbr_pub_offre_mois?idUser=1&mois=9"))
  return this.http.get<any>("api/pi_social_network-web/rest/statistique/nbr_pub_offre_mois?idUser="+id+"&mois="+mois)
}

doStatNbrRecrutementEntrepriseParMois(mois,idCompanyManager) :Observable<any> {//
 // console.log(this.http.get<any>("api/pi_social_network-web/rest/statistique/nbr_rec_entre_mois?mois=10&idCompanyManager=3"))
  return this.http.get<any>("api/pi_social_network-web/rest/statistique/nbr_rec_entre_mois?mois="+mois+"&idCompanyManager="+idCompanyManager)
}

doStatNbrToutRecrutementParMois(mois ) :Observable<any> {//
 // console.log(this.http.get<User[]>("api/pi_social_network-web/rest/statistique/nbr_total_rec_mois?mois=10"))
  return this.http.get<any>("api/pi_social_network-web/rest/statistique/nbr_total_rec_mois?mois="+mois)
}

getOffresParCompany(idCompanyManager : number): Observable<Offre[]> {

  //console.log(this.http.get<Offre[]>("api/pi_social_network-web/rest/statistique/getListOffreParCompany?idCompanyManager=1"))
  return this.http.get<Offre[]>("api/pi_social_network-web/rest/statistique/getListOffreParCompany?idCompanyManager="+idCompanyManager)


}



}

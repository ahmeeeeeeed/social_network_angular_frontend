import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { ApiAiClient } from 'api-ai-javascript';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { User } from '../Model/user';
import { share } from 'rxjs/operators';
import { Reclamation } from '../Model/reclamation';


// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);
  spinnerShow = false

  constructor(private http: HttpClient) {}

 // Http Options
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} 
getUsers(): Observable<User[]> {

  //console.log(this.http.get<User[]>("api/pi_social_network-web/rest/reclamation/users"))
  return this.http.get<User[]>("api/pi_social_network-web/rest/reclamation/users")

}

getUserById(id : number): Observable<User> {

  //console.log(this.http.get<User>("api/pi_social_network-web/rest/reclamation/user_by_id?idUser=5"))
  return this.http.get<User>("api/pi_social_network-web/rest/reclamation/user_by_id?idUser="+id)

}

getUserByEmailAndPassword(email,password): Observable<User> {

  //console.log(this.http.get<User>("api/pi_social_network-web/rest/reclamation/user_by_id?idUser=5"))
  return this.http.get<User>("api/pi_social_network-web/rest/reclamation/user_by_email_password?email="+email+"&password="+password)

}
sendClaim(idUser,description): Observable<Reclamation> {
  return this.http.post<Reclamation>("api/pi_social_network-web/rest/reclamation/ajouter_reclamation?idUser="+idUser+"&description="+description, null,this.httpOptions )


}  

sendSignal(idUser,description): Observable<Reclamation> {
  return this.http.post<Reclamation>("api/pi_social_network-web/rest/reclamation/signaler?idUser="+idUser+"&description="+description, null,this.httpOptions )


} 
getClaims(idUser): Observable<Reclamation[]> {
  return this.http.get<Reclamation[]>("api/pi_social_network-web/rest/reclamation/claim_history_id?idUser="+idUser )


}  




  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
               .then(res => {
//console.log(res)
                res.result.fulfillment.messages.forEach(element => {
                  const botMessage = new Message(element.speech, 'bot');
                  this.update(botMessage);
                });
                 // const speech = res.result.fulfillment.speech;
                  
               });
  }
  // Adds message to source
  update(msg: Message) {
    if(msg.sentBy == 'bot' && !(msg.content==''))//to avoid the empty messages from the bot
    {this.conversation.next([msg]);this.spinnerShow=false}
    if(msg.sentBy == 'user')//to avoid the empty messages from the user
    {this.conversation.next([msg]); this.spinnerShow=true}
  }


  
}

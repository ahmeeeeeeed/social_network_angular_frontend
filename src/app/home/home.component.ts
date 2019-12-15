import { Component, OnInit } from '@angular/core';
import { ReclamationService, Message } from '../Services/reclamation.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/scan';
import { FormGroup, FormControl, Validators } from '@angular/Forms';
import { User } from '../Model/user';
import { map, startWith } from 'rxjs/operators'
import { PayementService } from '../Services/payement.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messages: Observable<Message[]>;
  textM: string;

  username = ""
  showClaimModal = false;
  showsignalModal=false;
  showBilling=false
  showPulicationModal=false;

  users : User[]
  filteredOptions: Observable<string[]>
  serachControl = new FormControl()
  options: string[] = []
  userIndex =0
  hideTextZone=true
  placeholderText="cette zone est désactivée pour le moment"
  spinner=true
  claimOrSignal =""
  confirmationMessage =""
  messageSent=false
  connectedUser = new User()

  payementMethod = ""

  Moiss= [
    1,2,3,4,5,6,7,8,9,10,11,12
  ]
  Annee = [
    2021,2022,2023,2024,2025,2026,2027,2028,2029,2030
  ]
  premuim=false

  textMessage=""
  titre="";competence="";prix="";time="";description="";
  numcart="";mail="";mois="";annee="";cvv=""

  test = "test : "
  staticJobOffer = [
    {titre : "developpeur web" ,  competence : "MeanJS" ,prix : "1500",time : "Full Time",description : "developpement d'application web pour marketing CMS",date : new Date()},
    {titre : "developpeur mobil" ,  competence : "Android" ,prix : "1800",time : "Full Time",description : "developpement des applications pour play store",date : new Date()},
    {titre : "chef de projet " ,  competence : "backend" ,prix : "1500",time : "Hals Time",description : "organisation des projets d'une equipe de travail avec la methode SCRUM",date : new Date()},
  ]
  constructor(public reclamationService: ReclamationService,public payementService :PayementService ) { }

  ngOnInit() {
   
    this.connectedUser = JSON.parse( localStorage.getItem('connected_user'))
    this.username = this.connectedUser.nom
    //console.log(v)
    this.reclamationService.getUsers().subscribe(res =>{
      this.users = res
console.log("in res")
      
      
    },error =>{},  ()=>{console.log("in complete"+this.users)})

   /* this.reclamationService.getUserById(3).subscribe(res =>{

      this.connectedUser = res
      
    })*/
 
    this.payementService.testPremuim(this.connectedUser.id).subscribe(res =>{

      if (res < 0)
        this.premuim = false
      else this.premuim = true
      
    })
    
    /*this.filteredOptions = this.serachControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )*/


    // appends to array after each new message is added to feedSource
    this.messages = this.reclamationService.conversation.asObservable().scan((acc, val) => acc.concat(val) );
    this.spinner = this.reclamationService.spinnerShow
    //console.log(this.spinner)

  }
  initializeFilter(){
    this.filteredOptions = this.serachControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    )
  }

 





  messageForm = new FormGroup({
    textMessage : new FormControl('',Validators.required)
    
  })
  get  textMessageC(){

    return this.messageForm.get('textMessage')

  }
  sendMessage(text:string) {
    this.reclamationService.converse(text);

    this.scroll()
    
    //console.log(this.messages)
    this.textM = '';
  }
  demarrer(){
  this.sendMessage("Démarrer")

  this.users.forEach(element => {
    this.options.push(element.nom)
    console.log(this.options)
  });  

this.initializeFilter()
 
  }
  redemarrer(){
    this.sendMessage("Redémarrer");
    
  }


  /******************************reclamation*********************************** */

    
  reclamer(){
    this.sendMessage("Reclamer");
   // this.claimOrSignal = "reclamation"
  }
  
  signaler(){
    this.sendMessage("Demande de signalisation")
   // this.claimOrSignal = "signalisation"
    console.log(this.claimOrSignal)
  }
  Choisir(){
this.showClaimModal=true
document.getElementById('showClaimModalId').classList.add("active")

  }
  cancelClaimModal(){
    this.showClaimModal=false
document.getElementById('showClaimModalId').classList.remove("active")
  }
  choix_de_societe(index:any){
    //this.showClaimModal=false
    this.cancelClaimModal()
    this.claimOrSignal ="reclamation"
    this.userIndex=index
    this.sendMessage("societe : "+this.users[index].nom)

    console.log(this.messages)
    this.hideTextZone=false
    //window.scrollTo(0,document.scrollingElement.scrollHeight);
   // window.scrollTo(0,document.querySelector(".scrollingContainer").scrollHeight);
    
  }

  Contenu_de_reclamation(textMessage:string){
    this.sendMessage("Contenu : "+textMessage)
    this.claimOrSignal = ""

    this.hideTextZone=true
    this.textMessage=""

    this.reclamationService.sendClaim(this.users[this.userIndex].id,textMessage).subscribe(res=>{
      console.log(res)
    })

   // var container = document.getElementById("msgContainer");           
   // container.scrollTop = container.scrollHeight;  
  }

  Continuer(){
    this.sendMessage("je veux Continuer : ")
  }
  Quitter(){
    this.sendMessage("Merci, je veux Quitter")
  }

  /**************************************************************************** */

  /******************************signalisation*********************************** */

  ChoisirPersonne(){
    this.showsignalModal = true
    document.getElementById('showsignalModalId').classList.add("active")
    
  }
  cancelSignalisationModal(){
    this.showsignalModal = false
    document.getElementById('showsignalModalId').classList.remove("active")
  }
  Confirmer(){
    this.sendMessage("Confirmer signalisation ")
    this.reclamationService.sendSignal(this.users[this.userIndex].id,this.confirmationMessage ).subscribe(res=>{
      console.log(res)
    })
  }

  choix_de_condidat(index:any){
    //this.showsignalModal=false
    this.cancelSignalisationModal()
    this.claimOrSignal = "signalisation"
    this.userIndex=index
    this.sendMessage("Candidat : "+this.users[index].nom)

   // console.log(this.messages)
    this.hideTextZone=false
    //window.scrollTo(0,document.scrollingElement.scrollHeight);
   // window.scrollTo(0,document.querySelector(".scrollingContainer").scrollHeight);
    
  }
  Raison_signalisation(textMessage:string){
    this.sendMessage("Raison de signalisation : "+textMessage)
    this.confirmationMessage =textMessage
    this.claimOrSignal = ""
    this.textMessage=""

    this.hideTextZone=true

    console.log(this.claimOrSignal)

 
  }
  
    /**************************************************************************** */

    /******************************payement*********************************** */

    closeShowBilling(){
      this.showBilling = false
      this.numcart="";this.mail="";this.mois="";this.annee="";this.cvv=""
    }

    payer(numcart,mail,mois,annee,cvv){
     console.log( "payementMethod:"+ this.payementMethod)
     if(this.payementMethod=="compte"){
          this.payementService.payer(numcart,mail,mois,annee,cvv,this.connectedUser.id).subscribe(res =>{
            
               console.log("payer()")
                //  this.showBilling=false
           
           
                },err =>{
                  console.log("erreur !!")
                  this.showBilling=false
                  location.reload()
                })
      } 
      else if(this.payementMethod=="publication"){
        this.payementService.payerPourPublier(numcart,mail,mois,annee,cvv,this.connectedUser.id).subscribe(res=>{
          console.log("payerPourPublier()")
          
          // actions in html
          //this.showBilling=false
         // this.addStaticJob( this.titre,this.competence,this.prix,this.time,this.description)

        },err =>{
          this.showBilling=false
          this.addStaticJob( this.titre,this.competence,this.prix,this.time,this.description)
        })
      }
      else
      console.log( "il else : this.payementMethod"+ this.payementMethod)
     // this.showBilling=false // action in html
     // this.showPulicationModal = true

     this.numcart="";this.mail="";this.mois="";this.annee="";this.cvv=""
      
    }

     /**************************************************************************** */


    /******************************pubication*********************************** */


  publicationForm = new FormGroup({
    titre : new FormControl('',Validators.required),
    competence : new FormControl('',Validators.required),
    prix : new FormControl('',[Validators.required,Validators.min(0)]),
    time : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required)
    
  })

  get titreC(){
    return this.publicationForm.get('titre')
  }
  get competenceC(){
    return this.publicationForm.get('competence')
  }
  get prixC(){
    return this.publicationForm.get('prix')
  }
  get timeC(){
    return this.publicationForm.get('time')
  }
  get descriptionC(){
    return this.publicationForm.get('description')
  }

  payerForm = new FormGroup({
    numcart : new FormControl('',[Validators.required,Validators.min(4242424242424242),Validators.max(4242424242424242),Validators.minLength(16),Validators.maxLength(16)]),
    mail : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+.[a-zA-z0-9-.]+$')]),
    mois : new FormControl('',Validators.required),
    annee : new FormControl('',Validators.required),
    cvv : new FormControl('',[Validators.required,Validators.min(123),Validators.max(123),Validators.minLength(3),Validators.maxLength(3)])
    
  })
  get numcartC(){
    return this.payerForm.get('numcart')
  }
  get mailC(){
    return this.payerForm.get('mail')
  }
  get moisC(){
    return this.payerForm.get('mois')
  }
  get anneeC(){
    return this.payerForm.get('annee')
  }
  get cvvC(){
    return this.payerForm.get('cvv')
  }


     publier(titre,competence,prix,time,description){
      
       if (this.premuim == false) {

        // this.showPulicationModal = true
         let d = new Date()
         this.payementService.getNbrPublicationUserParMois(this.connectedUser.id, d.getMonth()).subscribe(res => {
           if (res >= 3) {
            console.log("getNbrPublicationUserParMois : "+res)
           
             this.showBilling = true
             this.payementMethod = "publication"
             
           }
           else{
            this.addStaticJob(titre,competence,prix,time,description)
           }
         })
       }
       else{
         this.addStaticJob(titre,competence,prix,time,description)
         
       }

       this.titre="";this.competence="";this.prix="";this.time="";this.description="";
       this.CancelPublication()

     
     }

     CancelPublication(){
       document.getElementById('postPopup').classList.remove("active")
       document.getElementById('overlayAfterCancel').classList.remove("overlay")
       this.titre="";this.competence="";this.prix="";this.time="";this.description="";
      // this.showPulicationModal = false
     }

 addStaticJob(titre,competence,prix,time,description){
   console.log("add in staticJob tab")
      this.staticJobOffer.push({titre : titre,
        competence : competence,
        prix : prix,
        time : time,
        description : description,
        date : new Date()
      })
        this.staticJobOffer.reverse()
     }
    /**************************************************************************** */


   scroll() {
    //window.scrollTo(0,document.scrollingElement.scrollHeight);
    var container = document.getElementById("msgContainer")   
    //console.log(container)        
    container.scrollTop = container.scrollHeight;  
    //window.scrollTo(0,document.querySelector(".scrollingContainer").scrollHeight);
  }


  /*
                          <div *ngIf="numcartC.invalid && numcartC.touched" class="alert alert-danger">
														Name is required
                          </div>
                          <div *ngIf="mailC.invalid && mailC.touched" class="alert alert-danger">
														Name is required
													</div>
                                       <div *ngIf="moisC.invalid && moisC.touched" class="alert alert-danger">
																				Name is required
                                      </div>

                                      <div *ngIf="anneeC.invalid && anneeC.touched" class="alert alert-danger">
																				Name is required
                                      </div>

                          <div *ngIf="cvvC.invalid && cvvC.touched" class="alert alert-danger">
														Name is required
                          </div>

 [disabled]="numcartC.invalid || mailC.invalid || moisC.invalid || anneeC.invalid || cvvC.invalid"


  */
  
}

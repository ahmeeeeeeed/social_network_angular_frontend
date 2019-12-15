import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from '../Services/statistique.service';
import { Offre } from '../Model/offre';
import { ReclamationService } from '../Services/reclamation.service';
import { User } from '../Model/user';
import { FormGroup, FormControl } from '@angular/Forms';
import { Subject } from 'rxjs';
import { Http, Response } from '@angular/common/esm5';
import { Payement } from '../Model/payement';
import { PayementService } from '../Services/payement.service';
import { Reclamation } from '../Model/reclamation';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {

  constructor(public statistiquereService : StatistiqueService,
    public reclamationService: ReclamationService,
    public payementService : PayementService) { }

  /**bar chart********* */
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['janvier', 'février',
                            'mars', 'avril',
                            'mai', 
                            'juin', 'juillet',
                            'août', 'septembre',
                            'octobre', 'novembre','décembre']
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [1, 2, 0, 0, 1, 1, 0, 0, 0, 3, 1, 2], label: 'Nombre de postule chaque mois'},
    //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

   /**line chart********* */
   //public lineChartData:Array<any> = [];
   public lineChartData:Array<any> = [{data: [50, 0, 0, 0], label: 'taux de postule'}];
   public lineChartLabels:Array<any> = ['janvier', 'février',
                                       'mars', 'avril',
                                       'mai', 
                                       'juin', 'juillet',
                                       'août', 'septembre',
                                       'octobre', 'novembre','décembre']

   public lineChartOptions:any = {
     responsive: true
   };
   public lineChartColors:Array<any> = [
     { // grey
       backgroundColor: 'rgba(148,159,177,0.2)',
       borderColor: 'rgba(148,159,177,1)',
       pointBackgroundColor: 'rgba(148,159,177,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
     },
     
   ];
   public lineChartLegend:boolean = true;
   public lineChartType:string = 'line';

    /**doughnut chart********* */
   public doughnutChartLabels = ['nombre de candidat Postulé à l"offre', 'nombre total d"abonnés'];
   //public doughnutChartData = [];
   public doughnutChartData = [0, 0];
  public doughnutChartType = 'doughnut';

  /**pie chart********* */
  public pieChartLabels = ['nombre de recrutement de votre sosiete ce mois', 'nombre total de recrutement dans ce mois'];
  public pieChartData = [0, 0];
  public pieChartType = 'pie';


  stat_1 = false
  stat_2 = false
  stat_3 = false
  stat_4 = false

  mois =['janvier', 'février',
  'mars', 'avril',
  'mai', 
  'juin', 'juillet',
  'août', 'septembre',
  'octobre', 'novembre','décembre']

  listeOffre : Offre[]= []
  offerSelected :number
  monthSelected

  nbrPostPaMoisTab : Number[]= []

  nmbrPostule : number[]= []

  user = new User()
  nbrUserPostuleAOffre : number

  NbrRecrutementEntrepriseParMois : number
  NbrToutRecrutementEntrepriseParMois : number

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  payementHist : Payement[]=[]
  reclamationHist : Reclamation[]=[]

  connectedUser = new User()
  ngOnInit() {

    this.connectedUser = JSON.parse( localStorage.getItem('connected_user'))

    this.payementService.getPayementByIdUser(this.connectedUser.id).subscribe(res => {

      this.payementHist = res
      //console.log(res)

    })

    this.reclamationService.getClaims(this.connectedUser.id).subscribe(res=>{
        this.reclamationHist=res
    })

    ///datatable
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4
    };
    
    /*this.http.get('api/pi_social_network-web/rest/payement/payement_history?idUser=3')
      .map(this.extractData)
      .subscribe(persons => {
        this.tab = persons;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });*/
    

    this.initializeListOffer()
   // .then((value)=> console.log(this.listeOffre) )

  this.initializeLineChart()

  this.initializeBarChart()

  this.initialiazePieChart()

  }


  test=false
  id
  labelValue

  click(test){
   
  //  this.id = test.id
  }

  initializeListOffer(){
    
    //return new Promise(resolve => {
      //setTimeout(() => {
        this.statistiquereService.getOffresParCompany(this.connectedUser.id).subscribe(res => {
          //console.log(res)
          this.listeOffre=res

          console.log(this.listeOffre)
          this.initialiazeDougnutChart()
         

        })
     // }, 1000);
      
   // });
 
  }
/**********************************stat_1************************************** */

selectForm = new FormGroup({
  selectC : new FormControl()
  
})
getNbrUserPostuleAOffreInComponent(id : number):number{

  this.statistiquereService.getNbrUserPostuleAOffre(id).subscribe(res=>{
    this.nbrUserPostuleAOffre = res;
    console.log("nbrUserPostuleAOffre :"+this.nbrUserPostuleAOffre)
  })
  
  return this.nbrUserPostuleAOffre;
}
getUserbyid():User{
  
  
  this.reclamationService.getUserById(this.connectedUser.id).subscribe(res =>{
    this.user = res

    //console.log("getUserbyid(element.id) : "+this.getUserbyid())
  })
  
  return this.user;
} 

initialiazeDougnutChart(){
  
 
    this.listeOffre.forEach(element => {
      //console.log(element.id)
      if(element.id == this.offerSelected){
        console.log(this.offerSelected)
        //getUserbyid():User
        this.reclamationService.getUserById(this.connectedUser.id).subscribe(res =>{
        this.user = res

            //getNbrUserPostuleAOffreInComponent(id : number):number
            this.statistiquereService.getNbrUserPostuleAOffre(element.id).subscribe(res=>{
            this.nbrUserPostuleAOffre = res;

            this.doughnutChartData= [ this.nbrUserPostuleAOffre,this.getUserbyid().nbAbonnees]
              //console.log("nbrUserPostuleAOffre :"+this.nbrUserPostuleAOffre)
            })
    
      })
        //this.doughnutChartData= [ this.getNbrUserPostuleAOffreInComponent(element.id),/*this.getUserbyid().nbAbonnees*/1]
      }
    });
    //console.log("initialiazeDougnutChart() : "+this.listeOffre.length)
  }
 

 

  ChangingValue(event : any,nbrUserPostuleAOffre,user:User){

        this.initialiazeDougnutChart()
    //   this.doughnutChartData= [nbrUserPostuleAOffre, user.nbAbonnees]

      

  }
  /****************************************************************************** */

  /**********************************stat_2************************************** */
  
  initializeBarChart(){
    //let nmbrPostule : number[]

   // console.log(this.listeOffre)

    this.listeOffre.forEach(element => {
      this.statistiquereService.getNbrUserPostuleAOffre(element.id).subscribe(res=>{
        console.log(res)
       // this.nbrUserPostuleAOffre = res;
        this.nmbrPostule.push(res)
         this.barChartData = [{data: this.nmbrPostule, label: 'taux de postule'}];
        //console.log("nbrUserPostuleAOffre :"+this.nbrUserPostuleAOffre)
        console.log(this.nmbrPostule)
      })
      
     
    });
    
   
    //console.log(nmbrPostule)

    //this.lineChartData = [{data: nmbrPostule, label: 'taux de postule'}];
  }

  /****************************************************************************** */

  /**********************************stat_3************************************** */
  compare(a:number, b:number) {
    if (a < b) {
      return - 1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  initializeLineChart(){
   /* this.nbrPostPaMoisTab.push(5)
    this.nbrPostPaMoisTab.push(8)
    this.nbrPostPaMoisTab.push(0)
    this.nbrPostPaMoisTab.push(0)
    this.nbrPostPaMoisTab.push(0)
    this.nbrPostPaMoisTab.push(0)
    this.nbrPostPaMoisTab.push(0)
    this.nbrPostPaMoisTab.push(0)
    this.nbrPostPaMoisTab.push(3)*/
    
    
    return new Promise(resolve => {
    for (let mois = 0; mois < 12; mois++) {
      
      this.statistiquereService.getNbrPublicationOffreParMois(this.connectedUser.id,mois).subscribe(res =>{
        //console.log(mois +" , "+res)
        this.nbrPostPaMoisTab.push(res)
      })  
    }
    this.nbrPostPaMoisTab.sort()
    
    this.lineChartData = [{data:  this.nbrPostPaMoisTab, label: 'taux de postule'}];
    //console.log(this.lineChartData)
  });
  }
  
  /****************************************************************************** */

  /**********************************stat_4************************************** */
  monthForm = new FormGroup({
    selectCM : new FormControl()
    
  })

  initialiazePieChart(){
  
 
    this.mois.forEach(element => {
      if(this.mois.indexOf(element) == this.monthSelected){
       
       // console.log(this.offerSelected)
        //getUserbyid():User
        this.statistiquereService.doStatNbrRecrutementEntrepriseParMois(this.monthSelected,this.connectedUser.id).subscribe(res =>{
     
          this.NbrRecrutementEntrepriseParMois=res

            
            this.statistiquereService.doStatNbrToutRecrutementParMois(this.monthSelected).subscribe(res=>{
            this.NbrToutRecrutementEntrepriseParMois = res;

            this.pieChartData= [ this.NbrRecrutementEntrepriseParMois, this.NbrToutRecrutementEntrepriseParMois]
            console.log(this.pieChartData)
              //console.log("nbrUserPostuleAOffre :"+this.nbrUserPostuleAOffre)
            })
    
      })
        //this.doughnutChartData= [ this.getNbrUserPostuleAOffreInComponent(element.id),/*this.getUserbyid().nbAbonnees*/1]
      }
    });
    //console.log("initialiazeDougnutChart() : "+this.listeOffre.length)
  }
  ChangingValuePieChart($event){
    this.initialiazePieChart()
  }
  
  /****************************************************************************** */



  getNbrUserPostuleAOffre_parRapportNbrTotal(){
    this.stat_1 = true
    this.stat_2 = false
    this.stat_3 = false
    this.stat_4 = false
  }

  getNbrUserPostuleAOffre(){
    //this.initializeLineChart()
    
    
    this.stat_1 = false
    this.stat_2 = true
    this.stat_3 = false
    this.stat_4 = false
   //public lineChartData:Array<any> = [{data: [65, 59, 80, 81], label: 'taux de postule'}];
    
    
  }

  getNbrPublicationOffreParMois(){
    this.stat_1 = false
    this.stat_2 = false
    this.stat_3 = true
    this.stat_4 = false
  }

  doStatNbrRecrutementEntrepriseParMois_doStatNbrToutRecrutementParMois(){
    this.stat_1 = false
    this.stat_2 = false
    this.stat_3 = false
    this.stat_4 = true
  }
  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }
  
  public chartHovered(e:any):void {
    //console.log(e);
  }
 
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}

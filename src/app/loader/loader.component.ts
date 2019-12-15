import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private _router :Router) { }

  ngOnInit() {

    setTimeout(() => {
      //this._router.navigate(['home'])
      window.location.replace('home')
    }, 500);

  }

    

}

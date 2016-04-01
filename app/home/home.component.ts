import {Component} from 'angular2/core';
import {Http, Response,Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {HomeComponent} from './home.component';

import { Injectable } from 'angular2/core';
@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
})

export class HomeComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;
    tname: string ;
    ttemp: number;
    twind: number;
    train: number;
    tgdd:string;
    twater: number;
   truc ={ "name": "sirine"};
    people: Array<any>= [''];
  constructor( public http: Http
  ) { }

  ngOnInit(http) {


      this.http.get('http://localhost:3000/terroirs/getterroirinfo')
          .map((res: Response) => res.json())
          .map((terroir: Object) => {this.tname=terroir.terroirname; this.ttemp= terroir.temperature; this.twind=terroir.wind; this.train=terroir.rain; this.tgdd=terroir.gdd; this.twater=terroir.water; this.truc.name=terroir.terroirname
          })
          .subscribe( result => {});



  }


}

import {Component,OnInit} from 'angular2/core';
import {Http, Response,Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import { RouteParams } from 'angular2/router';
import {UserService} from '../../app/user.service';
import {User} from '../../app/appuser/app-user';

import { Injectable } from 'angular2/core';
@Component({
    selector: 'mes-terroirs',
    templateUrl: 'app/MesTerroirs/mes-terroirs.html',
    styleUrls: ['app/MesTerroirs/mes-terroirs.css'],
})

export class MesTerroirs implements  OnInit{
    user : User;
    constructor(
        private _userService: UserService) { }

    Terroirs : string[];
    Terroir: string;


    getUser() {
        this.user = this._userService.getUser();
    }
    onSelect(terroir: string) {
        this.Terroir = terroir;
        var index = this._userService.User.terroirs.indexOf(terroir);
        this._userService.User.terroirs.splice(index, 1);
    }

    ngOnInit() {
        this.getUser();

        console.log(this.user.terroirs);
    }
}

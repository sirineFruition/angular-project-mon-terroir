import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {User} from '../../app/appuser/app-user';
import {UserService} from '../../app/user.service';

import { Router } from 'angular2/router';

@Component({
    selector: 'search',
    templateUrl: 'app/Search/search.html',
    })

export class SearchComponent implements  OnInit{

    constructor(
        private _router: Router,
        private _userService: UserService) { }

    getUser() {

    }
    ngOnInit() {
        this.getUser();

    }

}


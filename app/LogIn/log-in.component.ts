import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {User} from '../../app/appuser/app-user';
import { Injectable } from 'angular2/core';
import {UserService} from '../../app/user.service';
import { Router } from 'angular2/router';
@Component({
    selector: 'log-in',
    templateUrl: 'app/LogIn/log-in.component.html',
    styleUrls: ['app/LogIn/log-in.css'],
})

export class LogInComponent implements  OnInit{
    user : User;
    value:  string;
    constructor(
        private _router: Router,
        private _userService: UserService) { }

    getUser() {
this._userService.value ="whats up !"
        this.user = this._userService.getUser();
    }
    ngOnInit() {
        this.getUser();
    }

    submitted = false;


    onSubmit() {
        this.submitted = true;

        $.ajax({
            url: "http://localhost:3000/users/signin",
            type: 'POST',
            data: {username: this.user.username},

            success: function (data) {

                if (data == 'error') {

                }
                else {
                    console.log("auth reussie !")
                    this._userService.User.terroirs= data;
                    this._userService.User.username = this.user.username;
                        console.log(this.user.terroirs);
                    console.log(this.user.username);
                    this._router.navigate(['MesTerroirs']);

                }
            }.bind(
                this),
            error: function (xhr, status, err) {
                console.log("didnt connect")
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
 }

    active = true;


}


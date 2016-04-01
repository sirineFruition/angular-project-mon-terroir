import {Component, Input, Output, Inject, EventEmitter, ElementRef} from 'angular2/core';
import {UserService} from '../../app/user.service';
import {User} from '../../app/appuser/app-user';
@Component({
    selector: 'autocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    styleUrls: ['app/autocomplete/auto-complete.css'],
    templateUrl: 'app/autocomplete/auto-complete.html',
})
export class TypeAhead {
    public query = '';

    user:User;
    allterroirs = Array;
    public filteredList = [];
    public elementRef;
    selected:boolean;

    constructor(myElement:ElementRef, private _userService:UserService) {
        this.elementRef = myElement;
    }


    ngOnInit() {
        this.selected = false;
        this.user = this._userService.getUser();
        $.ajax({
            url: "http://localhost:3000/terroirs/search",
            type: 'GET',
            data: {'name': ''},
            success: function (data) {
                this.allterroirs = data;

            }.bind(this),
            error: function (xhr, status, err) {
                console.log("didnt connect")
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }


    filter() {
        if (this.query !== "") {
            this.filteredList = this.allterroirs.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.filteredList = [];
        }
    }

    select(item) {
        this.query = item;
        this.filteredList = [];
        this.selected = true;

    }

    handleClick(event) {
        var clickedComponent = event.target;

        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }

    }

    onAdd(query) {
        this._userService.User.terroirs.push(query);
        $('#addbutton').hide();
console.log(this._userService.User.terroirs)
    }
}
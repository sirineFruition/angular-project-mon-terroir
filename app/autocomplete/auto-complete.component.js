System.register(['angular2/core', '../../app/user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1;
    var TypeAhead;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            TypeAhead = (function () {
                function TypeAhead(myElement, _userService) {
                    this._userService = _userService;
                    this.query = '';
                    this.allterroirs = Array;
                    this.filteredList = [];
                    this.elementRef = myElement;
                }
                TypeAhead.prototype.ngOnInit = function () {
                    this.selected = false;
                    this.user = this._userService.getUser();
                    $.ajax({
                        url: "http://localhost:3000/terroirs/search",
                        type: 'GET',
                        data: { 'name': '' },
                        success: function (data) {
                            this.allterroirs = data;
                        }.bind(this),
                        error: function (xhr, status, err) {
                            console.log("didnt connect");
                            console.error(this.props.url, status, err.toString());
                        }.bind(this)
                    });
                };
                TypeAhead.prototype.filter = function () {
                    if (this.query !== "") {
                        this.filteredList = this.allterroirs.filter(function (el) {
                            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                        }.bind(this));
                    }
                    else {
                        this.filteredList = [];
                    }
                };
                TypeAhead.prototype.select = function (item) {
                    this.query = item;
                    this.filteredList = [];
                    this.selected = true;
                };
                TypeAhead.prototype.handleClick = function (event) {
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
                };
                TypeAhead.prototype.onAdd = function (query) {
                    this._userService.User.terroirs.push(query);
                    $('#addbutton').hide();
                    console.log(this._userService.User.terroirs);
                };
                TypeAhead = __decorate([
                    core_1.Component({
                        selector: 'autocomplete',
                        host: {
                            '(document:click)': 'handleClick($event)',
                        },
                        styleUrls: ['app/autocomplete/auto-complete.css'],
                        templateUrl: 'app/autocomplete/auto-complete.html',
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, user_service_1.UserService])
                ], TypeAhead);
                return TypeAhead;
            }());
            exports_1("TypeAhead", TypeAhead);
        }
    }
});
//# sourceMappingURL=auto-complete.component.js.map
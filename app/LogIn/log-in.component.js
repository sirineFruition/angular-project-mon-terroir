System.register(['angular2/core', '../../app/user.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, user_service_1, router_1;
    var LogInComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LogInComponent = (function () {
                function LogInComponent(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                    this.submitted = false;
                    this.active = true;
                }
                LogInComponent.prototype.getUser = function () {
                    this._userService.value = "whats up !";
                    this.user = this._userService.getUser();
                };
                LogInComponent.prototype.ngOnInit = function () {
                    this.getUser();
                };
                LogInComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    $.ajax({
                        url: "http://localhost:3000/users/signin",
                        type: 'POST',
                        data: { username: this.user.username },
                        success: function (data) {
                            if (data == 'error') {
                            }
                            else {
                                console.log("auth reussie !");
                                this._userService.User.terroirs = data;
                                this._userService.User.username = this.user.username;
                                console.log(this.user.terroirs);
                                console.log(this.user.username);
                                this._router.navigate(['MesTerroirs']);
                            }
                        }.bind(this),
                        error: function (xhr, status, err) {
                            console.log("didnt connect");
                            console.error(this.props.url, status, err.toString());
                        }.bind(this)
                    });
                };
                LogInComponent = __decorate([
                    core_1.Component({
                        selector: 'log-in',
                        templateUrl: 'app/LogIn/log-in.component.html',
                        styleUrls: ['app/LogIn/log-in.css'],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], LogInComponent);
                return LogInComponent;
            }());
            exports_1("LogInComponent", LogInComponent);
        }
    }
});
//# sourceMappingURL=log-in.component.js.map
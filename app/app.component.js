System.register(['angular2/core', 'angular2/router', './user.service', './home/home.component', './LogIn/log-in.component', './MesTerroirs/mes-terroirs.component', './autocomplete/auto-complete.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, home_component_1, log_in_component_1, mes_terroirs_component_1, auto_complete_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (log_in_component_1_1) {
                log_in_component_1 = log_in_component_1_1;
            },
            function (mes_terroirs_component_1_1) {
                mes_terroirs_component_1 = mes_terroirs_component_1_1;
            },
            function (auto_complete_component_1_1) {
                auto_complete_component_1 = auto_complete_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_userService) {
                    this._userService = _userService;
                }
                AppComponent.prototype.getUser = function () {
                    this.user = this._userService.getUser();
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getUser();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/login', name: 'Login', component: log_in_component_1.LogInComponent, useAsDefault: true },
                        { path: '/mes-terroirs', name: 'MesTerroirs', component: mes_terroirs_component_1.MesTerroirs },
                        { path: '/search', name: 'TypeAhead', component: auto_complete_component_1.TypeAhead }
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
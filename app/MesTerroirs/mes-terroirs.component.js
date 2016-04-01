System.register(['angular2/core', 'rxjs/add/operator/map', '../../app/user.service'], function(exports_1, context_1) {
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
    var MesTerroirs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            MesTerroirs = (function () {
                function MesTerroirs(_userService) {
                    this._userService = _userService;
                }
                MesTerroirs.prototype.getUser = function () {
                    this.user = this._userService.getUser();
                };
                MesTerroirs.prototype.onSelect = function (terroir) {
                    this.Terroir = terroir;
                    var index = this._userService.User.terroirs.indexOf(terroir);
                    this._userService.User.terroirs.splice(index, 1);
                };
                MesTerroirs.prototype.ngOnInit = function () {
                    this.getUser();
                    console.log(this.user.terroirs);
                };
                MesTerroirs = __decorate([
                    core_1.Component({
                        selector: 'mes-terroirs',
                        templateUrl: 'app/MesTerroirs/mes-terroirs.html',
                        styleUrls: ['app/MesTerroirs/mes-terroirs.css'],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], MesTerroirs);
                return MesTerroirs;
            }());
            exports_1("MesTerroirs", MesTerroirs);
        }
    }
});
//# sourceMappingURL=mes-terroirs.component.js.map
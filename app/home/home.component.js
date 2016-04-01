System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'angular2-google-maps/core'], function(exports_1, context_1) {
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
    var core_1, http_1, core_2;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(http) {
                    this.http = http;
                    this.lat = 51.678418;
                    this.lng = 7.809007;
                    this.truc = { "name": "sirine" };
                    this.people = [''];
                }
                HomeComponent.prototype.ngOnInit = function (http) {
                    var _this = this;
                    this.http.get('http://localhost:3000/terroirs/getterroirinfo')
                        .map(function (res) { return res.json(); })
                        .map(function (terroir) {
                        _this.tname = terroir.terroirname;
                        _this.ttemp = terroir.temperature;
                        _this.twind = terroir.wind;
                        _this.train = terroir.rain;
                        _this.tgdd = terroir.gdd;
                        _this.twater = terroir.water;
                        _this.truc.name = terroir.terroirname;
                    })
                        .subscribe(function (result) { });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.component.html',
                        styleUrls: ['app/home/home.component.css'],
                        directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {UserService} from './user.service';
import {User} from './appuser/app-user'
import {HomeComponent} from './home/home.component';
import {LogInComponent} from './LogIn/log-in.component';
import {MesTerroirs} from './MesTerroirs/mes-terroirs.component'
import {MapComponent} from './map/map.component';
import {SearchComponent}  from './Search/search.component'
import {TypeAhead} from './autocomplete/auto-complete.component'
@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [UserService]
})
@RouteConfig([
  {path: '/home',        name: 'Home',        component: HomeComponent},
  {path: '/login',       name: 'Login',       component: LogInComponent,  useAsDefault: true },
  {path: '/mes-terroirs', name: 'MesTerroirs', component: MesTerroirs },
  {path: '/search', name: 'TypeAhead', component: TypeAhead }
])
export class AppComponent  implements OnInit  {
  user : User;
  constructor(private _userService: UserService) { }
  getUser() {
    this.user = this._userService.getUser();
  }
  ngOnInit() {
    this.getUser();

  }
}

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {Http,HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent, [ROUTER_PROVIDERS,ANGULAR2_GOOGLE_MAPS_PROVIDERS,HTTP_PROVIDERS]);

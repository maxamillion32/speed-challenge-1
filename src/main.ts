import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';
import 
{ 
  FIREBASE_PROVIDERS, 
  defaultFirebase,
  AuthProviders,
  AuthMethods,
  firebaseAuthConfig
} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS, 
  defaultFirebase({
    apiKey: "AIzaSyAtllljCmaZkajLOIQdVaNPlY_23HDxUlo",
    authDomain: "speed-challenge-1.firebaseapp.com",
    databaseURL: "https://speed-challenge-1.firebaseio.com",
    storageBucket: "speed-challenge-1.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Google | AuthProviders.Facebook,
    method: AuthMethods.Popup
  })
]);


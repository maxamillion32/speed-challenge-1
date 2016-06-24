import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  providers: string[] = [
    'google',
    'facebook'
  ];
  loggedIn: boolean = false;

  constructor(
    public af: AngularFire,
    public router: Router) { }

  ngOnInit() {
    var self = this;
    this.af.auth.subscribe(auth => {
      if (auth) {
        self.router.navigate(['/chat']);
        self.loggedIn = true;
      }
      else {
        self.loggedIn = false;
      }
    });
  }

  ngOnDestroy() {
    //this.af.auth.unsubscribe();
  }

  login(provider: string) {
    switch(provider) {
      case 'google':
      this.af.auth.login({
        provider: AuthProviders.Google
      });
      break;
      case 'facebook':
      this.af.auth.login({
        provider: AuthProviders.Facebook
      });
      break;
    }
  }
}

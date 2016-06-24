import { Component }    from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import
{
  AngularFire,
  FirebaseAuthState
}  from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
  title = 'app works!';
  auth: FirebaseAuthState = null;

  /**
   * Construct a new AppComponent
   */
  constructor(public af: AngularFire, router: Router) {
    var self = this;
    af.auth.subscribe(auth => {
      if (auth) {
        self.auth = auth;
      }
      else {
        self.auth = null;
        router.navigate(['/login'])
      }
    });
  }
}

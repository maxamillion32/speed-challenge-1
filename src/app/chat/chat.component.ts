import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  user: { username: string, avatar: string } = null;
  messages: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {
    this.messages = af.database.list('/message');
  }

  ngOnInit() {
    var self = this;
    this.af.auth.subscribe(auth => {
      if (auth) {
        self.user = {
          username: auth.auth.displayName || auth.auth.email,
          avatar: auth.auth.photoURL
        };
      }
      else {
        self.user = null;
      }
    });
  }

  send(message: HTMLInputElement) {
    if (message.value) {
      this.messages.push({
        username: this.user.username,
        avatar: this.user.avatar,
        message: message.value
      });
      message.value = '';
    }
  }

  ngOnDestroy() {
    //this.af.auth.unsubscribe();
  }
}

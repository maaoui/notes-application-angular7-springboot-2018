import { IUser } from './domain/IUser';

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthentificationService } from './services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notit';

  currentUser: IUser;
  currentUserSubscription: Subscription;
    users: IUser[] = [];
  constructor(private auth: AuthentificationService, private router: Router) {
    this.currentUserSubscription = this.auth.currentUser.subscribe(user => {
      this.currentUser = user;
  });
  }
}

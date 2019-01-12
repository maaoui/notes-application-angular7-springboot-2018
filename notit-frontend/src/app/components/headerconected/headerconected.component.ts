import { IUser } from './../../domain/iuser';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-headerconected',
  templateUrl: './headerconected.component.html',
  styleUrls: ['./headerconected.component.scss']
})
export class HeaderconectedComponent implements OnInit {

  currentUser: IUser;
  currentUserSubscription: Subscription;
  user: any;
  constructor(private auth: AuthentificationService, private router: Router) {
    this.currentUserSubscription = this.auth.currentUser.subscribe(user => {
    this.currentUser = user;
    this.user = this.auth.getDecodedAccessToken(this.currentUser.token);
  });
  }


  ngOnInit() {
  }
    logout() {
      this.auth.logout();
      this.router.navigate(['/']);
    }
}


import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'angularx-social-login';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(
      private authentificationService: AuthService,
      private _router: Router
  ) { }

  ngOnInit() {
    if (! this.user) {
        this._router.navigate( ['/login'] );
    }

  }

}

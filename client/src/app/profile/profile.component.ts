import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

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
    console.log(this.authentificationService.currentUser);
    this.user = this.authentificationService.currentUser;
    if (! this.user) {
        this._router.navigate( ['/login'] );
    }

  }

}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';
import {LoginService} from '../../service/login.service';
// import {SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     profilName: string; 

  constructor(private userService: UserService,
              private loginService: LoginService
             ) {
      this.currentUser = this.loginService;
      console.log('currentUser: ', this.currentUser);
  }

  users: any;
  currentUser: any;
  serviceLogin: any;

  ngOnInit() {
      this.profilName = '';
  }

  updateProfil() {
     console.log('local: ', localStorage.getItem('currentUser'));
  }

}

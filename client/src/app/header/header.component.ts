import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     profilName: string;

  constructor(private userService: UserService,
              private authentificationservice: AuthService) {
  }

  users: any;
  currentUser;

  ngOnInit() {
      console.log(  this.authentificationservice.currentUser);
      this.profilName = 'Profile';
  }

  updateProfil() {
      this.profilName = this.authentificationservice.currentUser.username;
      console.log(  this.authentificationservice.currentUser);
      console.log('local: ', localStorage.getItem('currentUser'));
  }

}

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
             ) {
  }

  users: any;
  currentUser;

  ngOnInit() {
      this.profilName = 'Profile';
  }

  updateProfil() {
     // console.log('local: ', localStorage.getItem('currentUser'));
  }

}

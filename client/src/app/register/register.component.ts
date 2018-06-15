import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any;
  newUser: any = {};

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
      this.users = users;
      console.log('users', this.users);
    });
  }

  registerUser() {
    const user = this.newUser;
    console.log(user);
    this.userService.postUsers(user);
  }

}

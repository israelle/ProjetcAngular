import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {NotificationService} from '../../shared/notification/notification.service';
import {NotificationType} from '../../shared/notification/notification-type.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any;
  newUser: any = {};
  formErrors: any = {};


    constructor( private userService: UserService,
               private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
      this.users = users;
    });
  }

  registerUser() {
    const user = this.newUser;
      console.log('users', this.newUser);
    this.userService.postUsers(user)
        .subscribe(() => {
          // message de notification
            this.notificationService.addNotification(NotificationType.SUCCESS, 'Vous êtes maintenant enregistré !! .');

        },
            // error => {
            //     this.formErrors = {};
            //     for (const violation of error.violations) {
            //         this.formErrors[violation.propertyPath] = [this.formErrors[violation.propertyPath], violation.message].join(' ');
            //     }
            // }
        );
  }

}

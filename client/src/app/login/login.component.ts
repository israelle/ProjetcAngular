import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {EventSharedService} from '../event/event-shared.service';
import {UserService} from '../../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    error: string;
    model: any = {};
    constructor(
        // private router: Router,
              //   private eventSharedService: EventSharedService,
                 private userService: UserService

    ) {}
    ngOnInit(): void {
        // this.eventSharedService.findAll()
        //     .subscribe(data => {
        //         console.log(data);
        //     });
       console.log('this.userService.findAll()');
       console.log( this.userService.getUsers());
    }


}

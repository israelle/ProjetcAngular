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
    users: any;
    currentUser: any;
    loading: any;
    constructor(
        private userService: UserService,
        private authentificationService: AuthService,
        private _router: Router) {}

    ngOnInit(): void {
        this.authentificationService.logout();
    }

    login() {
        if (this.model.username !== '' && this.model.password !== '') {
            this.loading = true;
            this.findCurrentUser(this.model.username, this.model.password);
            // this._router.navigate( ['/home'] );
        }
    }

    findCurrentUser(username: string, password: string) {
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
                for (const user of this.users) {
                    if (user.username === username && user.password === password) {
                        this.currentUser = user;
                        this.loading = false;
                    }
                }
                this.userService.currentUser = this.currentUser;
                const u = this.authentificationService.login(this.userService.currentUser).subscribe(myuser => {
                    console.log('user: ', myuser);
                });
                console.log(this.currentUser );
            });

    }


}

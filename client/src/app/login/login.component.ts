import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
// import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

 //   user: SocialUser;
    loggedIn: boolean;
    username: string;
    password: string;
    error: string;
    model: any = {};
    users: any;
    currentUser: any;
    loading: any;
    constructor(
        private userService: UserService,
      //  private authentificationService: AuthService,
        private _router: Router,
        private  loginService: LoginService) {}

    ngOnInit(): void {
        this.loginService.getUsersDatabase()
            .subscribe( users => {
                this.users = users;
                console.log('users: ', this.users);
            });
        //
        // this.authentificationService.authState.subscribe((user) => {
        //     this.user = user;
        //     this.loggedIn = (user != null);
        // });
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
            });

    }

    signInWithGoogle(): void {
        console.log('test');
      //  this.authentificationService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
      //  this.authentificationService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
     //   this.authentificationService.signOut();
    }
}

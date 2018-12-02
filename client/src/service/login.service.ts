import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {SocialUser, AuthService} from 'angularx-social-login';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class LoginService {

    API_URL = 'http://localhost:8000';
    loggedIn: boolean;
    user: SocialUser;
    constructor(private http: HttpClient,
                private router: Router,
                // private  authService: AuthService,
                private apiRouter: ApiRouter,
                public authHttp: AuthHttp) {

        // this.authService.authState.subscribe((user) => {
        //     this.user = user;
        //     this.loggedIn = (user != null);
        //     this.setUser(user);
        //     this.router.navigate( ['/home']);
        // });
    }

    setUser(userLogin: SocialUser) {
        this.user = userLogin;
    }

    getUsersDatabase(): Observable<any> {
        return this.http.get(this.API_URL + '/users');
    }

    postUserGoogleDataBase(user): Observable<any> {
        return this.http.post(this.API_URL + '/user', {nomutilisateur: user.name});
    }
    getUser(): SocialUser {
        return this.user;
    }

}

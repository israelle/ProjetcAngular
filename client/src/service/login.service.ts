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
    constructor(private _http: HttpClient,
                private _router: Router,
                private  _authService: AuthService,
                private _apiRouter: ApiRouter,
                public _authHttp: AuthHttp) {

        this._authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            this.setUser(user);
            console.log('loginService: ', this.user);
            this._router.navigate( ['/home']);
        });
    }

    setUser(userLogin: SocialUser) {
        this.user = userLogin;
    }

    getUsersDatabase(): Observable<any> {
        return this._http.get(this.API_URL + '/users');
    }

    postUserGoogleDataBase(user): Observable<any> {
        return this._http.post(this.API_URL + '/user', {nomutilisateur: user.name});
    }
    getUser(): SocialUser {
        return this.user;
    }


    signOut(): void {
        this._authService.signOut();
    }

    getHttp(): HttpClient {
        return this._http;
    }

    getRouter(): Router {
        return this._router;
    }

    getAuthService(): AuthService {
        return this._authService;
    }

    getApiRouter(): ApiRouter {
        return this._apiRouter;
    }

    getAuthHttp(): AuthHttp {
        return this._authHttp;
    }
}

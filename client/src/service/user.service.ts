import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';


 const API_URL = 'http://127.0.0.1:8000';

@Injectable()
export class UserService {
    constructor(
                 private http: HttpClient,
                 private apiRouter: ApiRouter,
                 public authHttp: AuthHttp) {

    }

    // findAll() {
    //     return this.authHttp
    //         .get(this.url + '/users/')
    //         .map(data => {data.json();
    //         console.log('data');
    //         console.log(data);
    //         });
    // }
    getUsers(): Observable<any> {
        return this.http.get(API_URL + '/users');
    }

    // post() {
    //     return this.authHttp.post()
    // }
    postUsers(newUser: any): Observable<any> {
        return this.authHttp.post(this.apiRouter.generate('api_users_post_collection'), newUser)
            .map(data => data.json());
    }
}

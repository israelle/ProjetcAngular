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

    url = 'http://127.0.0.1:8000';
    constructor(
                 private http: HttpClient) {

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

    postUsers(newUser: any): Observable<any> {
        return this.http.post(API_URL + '/users', [newUser.lastname, newUser.firstname, newUser.username, newUser.phone, newUser.mail]);
    }

}

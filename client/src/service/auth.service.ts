import {EventEmitter, Injectable, Output} from '@angular/core';
import 'rxjs/add/observable/throw';
import {HttpClient} from '@angular/common/http';
import {ApiRouter} from '../shared/api-routes/api-router.service';

import { Observable } from 'rxjs/index';

@Injectable()
export class AuthService {
     currentUser: any;
    constructor(private http: HttpClient,
                private apiRouter: ApiRouter,
                ) {
    }

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    login(user: any): Observable<any> {
        return this.http.get(this.apiRouter.generate('api_users_get_item', { id: user.id}))
            .map(data => {
                // login successful if there's a jwt token in the response
                if (data ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data));
                }
              //  this.currentUser = data.json();
                return  this.currentUser;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }


}


import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {AuthHttp} from 'angular2-jwt';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    currentUser: any;
    constructor(
                 private http: HttpClient,
                 private apiRouter: ApiRouter,
                 public authHttp: AuthHttp) {

    }
    /**
     * found a user with his id
     * @param user
     */
    getUser(user: any): Observable<any>  {
        return this.authHttp.get(this.apiRouter.generate('api_users_get_item', {id: user.id}));
    }

    /**
     * found all users
     */
    getUsers(): Observable<any> {
        return this.authHttp.get(this.apiRouter.generate('api_users_get_collection'))
            .map(data => data.json());
    }


    postUsers(newUser: any): Observable<any> {
        return this.authHttp.post(this.apiRouter.generate('api_users_post_collection'), newUser)
            .map(data => data.json());
    }

    /**
     * delete an user with is id
     * @param user
     */
    deleteUser(user: any) {
        return this.authHttp.delete(this.apiRouter.generate('api_users_delete_item', {id: user.id}));
    }
}

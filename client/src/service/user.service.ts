import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    currentUser: any;
    constructor(
                 private http: HttpClient,
                 private apiRouter: ApiRouter,
                ) {

    }
    /**
     * found a user with his id
     * @param user
     */
    getUser(user: any): Observable<any>  {
        return this.http.get(this.apiRouter.generate('api_users_get_item', {id: user.id}));
    }

    /**
     * found all users
     */
    getUsers(): Observable<any> {
        return this.http.get(this.apiRouter.generate('api_users_get_collection'));
    }


    postUsers(newUser: any): Observable<any> {
        return this.http.post(this.apiRouter.generate('api_users_post_collection'), newUser);
    }

    /**
     * delete an user with is id
     * @param user
     */
    deleteUser(user: any) {
        return this.http.delete(this.apiRouter.generate('api_users_delete_item', {id: user.id}));
    }
}

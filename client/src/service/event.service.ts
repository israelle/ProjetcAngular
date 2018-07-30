import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient} from '@angular/common/http';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {AuthHttp} from 'angular2-jwt';


const API_URL = 'http://127.0.0.1:8000';

@Injectable()
export class EventService {
    constructor(
        private http: HttpClient,
        private apiRouter: ApiRouter,
        public authHttp: AuthHttp) {

    }

    getEvent(): Observable<any> {
        return this.http.get(API_URL + '/events');
    }

    findEvents(): Observable<any> {
        return this.authHttp.get(this.apiRouter.generate('api_events_get_collection'))
            .map(data => data.json());
    }

    postEvent(event: any): Observable<any> {
    return this.http.post(API_URL + '/events', event);
    }

    deleteEvent(event): Observable<any> {
    const eventId = event.id;
    console.log(event);
        return this.authHttp.delete(this.apiRouter.generate('api_events_delete_item', {id: eventId}))
            .map(res => res.json());
    }

    putEvent(eventId) {
    return this.http.put( API_URL + '/events/', eventId);
    }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import { Observable } from 'rxjs/index';


const API_URL = 'http://127.0.0.1:8000';

@Injectable()
export class EventService {
    constructor(
        private http: HttpClient,
        private apiRouter: ApiRouter,
        ) {

    }

    getEvent(): Observable<any> {
        return this.http.get(this.apiRouter.generate('api_events_get_collection'))
                 ;
    }

    findEvents() {

    }

    postEvent(event: any) {

    }
    deleteEvent(event: any) {

    }
    // findEvents(): Observable<any> {
    //     return this.authHttp.get(this.apiRouter.generate('api_events_get_collection'))
    //         .map(data => data.json());
    // }
    //
    // postEvent(event: any): Observable<any> {
    // return this.authHttp.post(this.apiRouter.generate('api_events_post_collection'), event)
    //     .map(data => data.json());
    // }
    //
    // deleteEvent(event): Observable<any> {
    // const eventId = event.id;
    // console.log(event);
    //     return this.authHttp.delete(this.apiRouter.generate('api_events_delete_item', {id: eventId}))
    //         .map(res => res.json());
    // }

    putEvent(eventId) {
        return this.http.put(this.apiRouter.generate('api_events_delete_item'), eventId);
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import { Observable } from 'rxjs/observable';


const API_URL = 'http://127.0.0.1:8000';

@Injectable()
export class EventService {
    constructor(
        private http: HttpClient,
        private apiRouter: ApiRouter,
        ) {

    }

    getEvent(): Observable<any> {
       return this.http.get(this.apiRouter.generate('api_events_get_collection'));
}

    findEvents() {

    }
    // findEvents(): Observable<any> {
    //     return this.authHttp.get(this.apiRouter.generate('api_events_get_collection'))
    //         .map(data => data.json());
    // }
    //
    postEvent(event: any): Observable<any> {
    return this.http.post(this.apiRouter.generate('api_events_post_collection'), event);
    }

    deleteEvent(event): Observable<any> {
    const eventId = event.id;
    console.log(event);
        return this.http.delete(this.apiRouter.generate('api_events_delete_item', {id: eventId}));
    }

    putEvent(eventId) {
        return this.http.put(this.apiRouter.generate('api_events_delete_item'), eventId);
    }

}

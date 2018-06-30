import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {AngularFireDatabase} from 'angularfire2/database';


const API_URL = 'http://127.0.0.1:8000';

@Injectable()
export class EventService {
  constructor(private http: Http,
              private db: AngularFireDatabase
  ) {}
    // getEvent(): Observable<any> {
    //     return this.http.get(this.apiRouter.generate('api_events_get_collection')).map((res => res.json()));
    // }
    getEvent(): Observable<any> {
        return this.http.get(API_URL + '/events').map((res => res.json()));
    }

    postEvent(event: any): Observable<any> {
    console.log('post: ', event);
    return this.http.post(API_URL + '/events', event).map((res => res.json()));
    }

    deleteEvent(eventId) {
    return this.http.delete(API_URL + '/events/', eventId);
    }

    putEvent(eventId) {
    return this.http.put( API_URL + '/events/', eventId);
    }

}

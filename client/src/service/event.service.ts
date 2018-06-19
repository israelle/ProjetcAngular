import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {AuthHttp} from 'angular2-jwt';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';


const API_URL = 'http://127.0.0.1:8000';

@Injectable()
export class EventService {
  constructor(private http: HttpClient,
              private db: AngularFireDatabase
  ) {}
    // findAll(): Observable<any> {
    //     return this.authHttp
    //         .get(this.apiRouter.generate('api_events_get_collection'))
    //         .map(data => data.json());
    // }

    getEvent(): Observable<any> {
        return this.http.get(API_URL + '/events');
    }

    postEvent(event: any): Observable<any> {
    return this.http.post(API_URL + '/events/', event);
    }

    deleteEvent(eventId) {
    return this.http.delete(API_URL + '/events/', eventId);
    }

    // saveFile(file) {
    //     this.db.list(`images`).push(file);
    // }

    // pushFileToStorage(fileUpload, progress: {percentage: number}) {
    // const metaData = {'contentType': fileUpload.type};
    //     const storageRef: firebase.storage.Reference = firebase.storage().ref('/images/url1');
    //     storageRef.put(fileUpload, metaData);
    //     console.log('Uploading', fileUpload.name);
    //
    // }

}

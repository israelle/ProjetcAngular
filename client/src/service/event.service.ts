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

    getEvent(): Observable<any> {
        return this.http.get(API_URL + '/events').map((res => res.json()));
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

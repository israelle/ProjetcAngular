import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Contact} from '../app/model/Contact';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class MailService {

    ServerUrl = 'http://localhost/dev/blogger/';
    errorData: {};

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    constructor(private http: HttpClient) { }

    contactForm(formdata: Contact) {
        return this.http.post<Contact>(this.ServerUrl + 'api/contact', formdata, this.httpOptions).pipe(
            catchError(this.handleError)
        );
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
        };
        return throwError(this.errorData);
    }
}

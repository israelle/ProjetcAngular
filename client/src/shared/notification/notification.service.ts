import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {NotificationType} from './notification-type.model';
import {Notification} from './notification.model';

@Injectable()
export class NotificationService {

    notification: Observable<Notification>;

    private notificationSource: ReplaySubject<Notification>;

    constructor() {
        this.notificationSource = new ReplaySubject<Notification>();
        this.notification = this.notificationSource.asObservable();
    }

    addNotification(type, message: string) {
        this.notificationSource.next(new Notification(type, message));
    }

}

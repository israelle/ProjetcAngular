import {Component, OnDestroy, OnInit} from '@angular/core';
// import {Subscription} from 'rxjs/Subscription';
 import { ToastyService, ToastyConfig, ToastOptions } from 'toastr';
import {NotificationService} from './notification.service';
import {Config} from '../config';
import {NotificationType} from './notification-type.model';
import {Notification} from './notification.model';


@Component({
    selector: 'app-notification',
    template: `<div ></div>`
})

export class NotificationComponent implements OnInit, OnDestroy {

    notifications: Notification[] = [];
  //  subscription: Subscription;
    toastOptions: ToastOptions;

    constructor(
      //  private notificationService: NotificationService,
      //   private toastyService: ToastyService,
      //   private toastyConfig: ToastyConfig
    ) {}
    ngOnInit() {
        // this.toastyConfig.theme = 'bootstrap';
        this.toastOptions = {
            title: '',
            showClose: true,
            timeout: Config.TOAST_TIMEOUT,
        };
        // this.subscription = this.notificationService.notification
        //     .subscribe(notification => {
        //         this.notifications.push(notification);
        //         this.addToast(notification);
        //     });
    }

    ngOnDestroy() {
      //  this.subscription.unsubscribe();
    }

    private addToast(notification: Notification) {
        const toastOptions = Object.assign({}, this.toastOptions);
        toastOptions['msg'] = notification.getMessage();
        const type = notification.getType();
        if (type === NotificationType.ERROR) {
          //  toastOptions['title'] = 'Erreur';
         //   this.toastyService.error(toastOptions);
        } else if (type === NotificationType.INFO) {
         //   toastOptions['title'] = 'Information';
         //   this.toastyService.info(toastOptions);
        } else {
          //  toastOptions['title'] = 'Succès';
         //   this.toastyService.success(toastOptions);
        }
    }
}

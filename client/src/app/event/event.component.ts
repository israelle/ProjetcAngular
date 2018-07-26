import { Component, OnInit } from '@angular/core';
import {EventSharedService} from './event-shared.service';
import {NgxSpinnerService} from 'ngx-spinner';
import 'rxjs/add/operator/finally';
import {NotificationType} from '../../shared/notification/notification-type.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    events: any;
    isLoading = false;

  constructor(
     private eventSharedService: EventSharedService,
     private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
   this.seeEvent();
  }

  seeEvent() {
      this.isLoading = true;
      this.eventSharedService.getEvent()
          .finally(() => this.isLoading = false)
          .subscribe(events => {
              this.events = events;
              if (this.isLoading) {
                  /** spinner starts on init */
                  this.spinner.show();

                  setTimeout(() => {
                      /** spinner ends after 5 seconds */
                      this.spinner.hide();
                  }, 500);
              }
          });
  }
  deleteEvent(event) {
      this.eventSharedService.deleteEvent(event)
          .subscribe(() => {
                  // message de notification
              },
          );
      console.log('ok fait');
  }
  putEvent(eventId) {
      this.eventSharedService.putEvent(eventId);
  }

}

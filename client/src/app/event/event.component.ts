import { Component, OnInit } from '@angular/core';
import {EventSharedService} from './event-shared.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    private events: any;
    private isLoading: boolean;

  constructor(
     private eventSharedService: EventSharedService,
     private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
      this.isLoading = false;
   this.seeEvent();
  }

  seeEvent() {
      this.eventSharedService.getEvent()
          .subscribe(data => {
              console.log(data);
              this.isLoading = true;
              if (this.isLoading) {
                  this.events = data;
                  /** spinner starts on init */
                  this.spinner.show();

                  setTimeout(() => {
                      /** spinner ends after 5 seconds */
                      this.spinner.hide();
                  }, 500);
              }
          });
  }

}

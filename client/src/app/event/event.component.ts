import { Component, OnInit } from '@angular/core';
import {EventSharedService} from './event-shared.service';

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
  ) { }

  ngOnInit() {
      this.isLoading = true;
   this.seeEvent();
  }

  seeEvent() {
      this.eventSharedService.getEvent()
          .subscribe(data => {
              console.log(data);
              this.isLoading = true;
              this.events = data;
              // let startDate;
              // let endDate;
              // for (const event of this.events) {
              //     startDate = new Date(event.startDate).toLocaleString();
              //     event.startDate = startDate;
              //     endDate = new Date(event.endDate).toLocaleString();
              //     event.endDate = endDate;
              // }
          });
  }

}

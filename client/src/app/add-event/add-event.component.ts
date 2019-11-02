import { Component, OnInit, } from '@angular/core';
import {EventSharedService} from '../event/event-shared.service';
import {NotificationType} from '../../shared/notification/notification-type.model';
import {NotificationService} from '../../shared/notification/notification.service';
import {AssociationService} from '../../service/association.service';
import {unitOfTime} from 'moment';
import * as moment from 'moment';
import {DateButton} from 'angular-bootstrap-datetimepicker';
import 'moment/locale/fr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
    associations: any;
    selectedWorkout: any;

  constructor(private eventSharedService: EventSharedService,
              private notificationService: NotificationService,
              private associationService: AssociationService,
              private _router: Router,
              ) { }
  event: any = [];
    fileName = '';
    title = 'Dale Lotts\' angular bootstrap date & time picker';


  ngOnInit() {
      if (this.eventAlreadyExist()) {
          this.event = this.eventSharedService.selectedEvent;
      }
      moment.locale('fr'); // set to french
    this.event.association = {};
      this.event.association.logo = '';

      this.associationService.getAssociation()
          .subscribe(associations => {
                  this.associations = associations;
            });
  }

    selectFilter = (dateButton: DateButton, viewName: string) => {
        const now = moment().startOf(viewName as unitOfTime.StartOf).valueOf();
        return dateButton.value >= now;
    }

  eventAlreadyExist() {
      return this.eventSharedService.selectedEvent !== null;
  }

    onChange(association) {
      console.log(association);
              this.event.association = association ;
    }
    onChangeStartDate(event) {
        this.event.startDate = event;
    }

    onChangeEndDate(event) {
        this.event.endDate = event;
    }
    onChangeAddress(event) {
        this.event.address = event;
    }
    onChangeEndTime(event) {
        this.event.endTime = event;
    }
    onChangeStartTime(event) {
        console.log('event: ', event);
        this.event.endTime = event;
    }

    onChangeTitle(event) {
      this.event.title = event;
    }

  save() {
      const infoEvent = this.event;
      this.eventSharedService.postEvent(infoEvent)
          .subscribe(() => {
          // message de notification
             // console.log(infoEvent);
        //  this.notificationService.addNotification(NotificationType.SUCCESS, 'Nouvel évènement enregistré !!');
          this._router.navigate( ['/event'] );
      });
   }
}

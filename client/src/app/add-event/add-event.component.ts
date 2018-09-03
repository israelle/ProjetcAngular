import {Component, OnInit, TemplateRef} from '@angular/core';
import {EventSharedService} from '../event/event-shared.service';
import * as _ from 'lodash';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {Validators} from '@angular/forms';
import {NotificationType} from '../../shared/notification/notification-type.model';
import {NotificationService} from '../../shared/notification/notification.service';
import {AssociationService} from '../../service/association.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {unitOfTime} from 'moment';
import * as moment from 'moment';
import {DateButton} from 'angular-bootstrap-datetimepicker';
import 'moment/locale/fr';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
    associations: any;
    selectedWorkout: any;
    selectedDate: Date;
  constructor(private eventSharedService: EventSharedService,
              private notificationService: NotificationService,
              private associationService: AssociationService,
              ) { }
  event: any = [];
    fileName = '';

    title = 'Dale Lotts\' angular bootstrap date & time picker';
    startView = 'day';
    minuteStep = 5;
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
      this.event.startTime = event;
    }

    onChangeTitle(event) {
      this.event.title = event;
    }

  save() {
      const infoEvent = this.event;
      this.eventSharedService.postEvent(infoEvent)
          .subscribe(() => {
              // message de notification
              this.notificationService.addNotification(NotificationType.SUCCESS, 'Nouvel évènement enregistré !! .');
          });
   }
}

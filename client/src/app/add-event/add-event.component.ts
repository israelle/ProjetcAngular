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
              ) { }
  event: any = [];
    fileName = '';


  ngOnInit() {
      if (this.eventAlreadyExist()) {
          this.event = this.eventSharedService.selectedEvent;
      }

    this.event.association = {};
      this.event.association.logo = '';

      this.associationService.getAssociation()
          .subscribe(associations => {
                  this.associations = associations;
            });
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

import { Component, OnInit, ViewChild } from '@angular/core';
import {EventSharedService} from './event-shared.service';
import 'rxjs/add/operator/finally';
import {NotificationType} from '../../shared/notification/notification-type.model';
import {ModalDirective} from 'ngx-bootstrap';
import {NotificationService} from '../../shared/notification/notification.service';

@Component({
    selector: 'app-event-modal',
    templateUrl: './event-modal.component.html',
    styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
    @ViewChild('editModal') editModal: ModalDirective;
    @ViewChild('deleteModal') deleteModal: ModalDirective;
    isDeleting = false;
    selectedEvent: any = {};

    constructor(private eventShareService: EventSharedService,
                private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.selectedEvent = this.eventShareService.selectedEvent;
        console.log('selected event : ', this.selectedEvent);
    }

    delete() {
        this.isDeleting = true;
        this.eventShareService.deleteEvent(this.eventShareService.selectedEvent)
            .finally(() => this.isDeleting = false)
            .subscribe(
                () => {
                    this.notificationService.addNotification(NotificationType.SUCCESS, 'L\'évènement a été supprimé.');
                    this.eventShareService.hideDeleteModal();
                }
           )
        ;
            this.eventShareService.refresh();
    }
    isDeleteModalShown() {
        return this.eventShareService.isDeleteModalShown;
    }

    hideDeleteModal() {
        this.eventShareService.hideDeleteModal();
    }

    isEditModalShown() {
        return this.eventShareService.isEditModalShown;
    }

    hideEditModal() {
        this.eventShareService.hideEditModal();
    }

}

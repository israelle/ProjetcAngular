import { Injectable } from '@angular/core';
import { EventService } from '../../service/event.service';


@Injectable()
export class EventSharedService {

    isEditModalShown = false;
    isDeleteModalShown = false;
    selectedEvent: any = {};
    events: any;
    constructor(
        private eventService: EventService

    ) {}

    findEvents() {
        return this.eventService.findEvents();
    }
    postEvent(event) {
        return this.eventService.postEvent(event);
    }
    deleteEvent(event) {
        return this.eventService.deleteEvent(event);
    }

    putEvent(eventId) {
        return this.eventService.putEvent(eventId);
    }

    // pushFileToStorage(fileUpload, progress: {percentage: number}) {
    //     return this.eventService.pushFileToStorage(fileUpload, progress);
    // }

    saveFile(file) {
       // this.eventService.saveFile(file);
    }
    refresh() {
        this.eventService.getEvent();
    }

    showEditModal(infoEvent: any) {
        // Clone infoEvent
        const selectedEvent = infoEvent;

        this.selectedEvent = selectedEvent;
        this.isEditModalShown = true;
    }

    hideEditModal() {
        this.isEditModalShown = false;
        this.selectedEvent = {};
    }

    showDeleteModal(infoCertification: any) {
        this.selectedEvent = infoCertification;
        this.isDeleteModalShown = true;
    }

    hideDeleteModal() {
        this.isDeleteModalShown = false;
        this.selectedEvent = {};
    }
}

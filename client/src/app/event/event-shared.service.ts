import { Injectable } from '@angular/core';
import { EventService } from '../../service/event.service';

@Injectable()
export class EventSharedService {

    isEditModalShown = false;
    isDeleteModalShown = false;
    selectedEvent: any = {};
    events: any;
    constructor(
        private eventService: EventService,
    ) {}

    findEvents() {
        console.log('eventservice' + this.eventService.findEvents());
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

    getEvent() {
       return this.eventService.getEvent();
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

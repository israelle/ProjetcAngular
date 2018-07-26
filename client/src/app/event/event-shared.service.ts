import { Injectable } from '@angular/core';
import { EventService } from '../../service/event.service';


@Injectable()
export class EventSharedService {


    constructor(
        private eventService: EventService

    ) {}


    getEvent() {
        return this.eventService.getEvent();
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
}

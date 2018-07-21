import {NotificationType} from './notification-type.model';

export class Notification {

    constructor(
        private type: NotificationType,
        private message: string
    ) {}

    getType() {
        return this.type;
    }

    getMessage() {
        return this.message;
    }

}

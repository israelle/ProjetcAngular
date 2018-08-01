import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../service/association.service';
import {NotificationService} from '../../shared/notification/notification.service';
import {NotificationType} from '../../shared/notification/notification-type.model';
import {ImageUploadService} from '../../service/imageUpload.service';
import {ImageUploadModel} from '../image/imageUpload-model';

@Component({
    selector: 'app-add-association',
    templateUrl: './add-association.component.html',
    styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {

    association: any = {};
    selectedFile: any;
    selectedFiles: FileList;
    currentFileUpload: ImageUploadModel;
    progress: {percentage: number} = {percentage: 0};

    constructor(
        private associationService: AssociationService,
        private notificationService: NotificationService,
        private imageUploadService: ImageUploadService,
    ) {}
    ngOnInit() {
    }

    onselected(event) {
        this.selectedFile = event.target.files[0];

    }
    save() {
       const association =  this.association;
       this.associationService.save(association)
           .subscribe(
               () => {
                   // message de notification
                   this.notificationService.addNotification(NotificationType.SUCCESS, 'Nouvelle association enregistrée !! .');
               });
    }

    selectFile(event) {
        this.selectedFiles = event.target.files;
    }

    upload() {
        const file = this.selectedFiles.item(0);
        this.currentFileUpload = new ImageUploadModel(file);
        this.imageUploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    }

}

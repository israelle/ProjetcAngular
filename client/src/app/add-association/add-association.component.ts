import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../service/association.service';
import {NotificationService} from '../../shared/notification/notification.service';
import {Observable} from 'rxjs/Observable';
import {ImageUploadService} from '../../service/imageUpload.service';
import {NotificationType} from '../../shared/notification/notification-type.model';

@Component({
    selector: 'app-add-association',
    templateUrl: './add-association.component.html',
    styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {

    association: any = {};
    selectedFile: File = null;
    _getImages: Observable<any[]>;
    progress: {percentage: number} = {percentage: 0};
    isPublished = true;
    isSaved = false;
  private onClose: any;

    constructor(
        private associationService: AssociationService,
        private notificationService: NotificationService,
        private imageUploadService: ImageUploadService,
    ) {}
    ngOnInit() {
    }

    save() {
      this.imageUploadService.upload(this.selectedFile, this.association.name)
        .finally(() => this.isPublished = true)
        .subscribe(() => {
            console.log(this.isPublished);

            const association =  this.association;
            this.associationService.newAssociation = association;
            this.associationService.save(association)
              .subscribe(
                () => {

                  // message de notification
                  this.notificationService.addNotification(NotificationType.SUCCESS, 'Nouvelle association enregistrée !! .');
                  this.isSaved = true;
                  this.onClose.emit();
                });
          },
          error => {
            this.notificationService.addNotification(NotificationType.ERROR, error);
          });
    }

  onSelectedFile(event) {
      this.selectedFile = <File> event.target.files[0];
  }
  published() {
    this.imageUploadService.upload(this.selectedFile, this.association.name)
      .finally(() => this.isPublished = true)
      .subscribe(() => {
        },
        error => {
          console.log(error);
        });

  }
}

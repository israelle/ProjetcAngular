import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../service/association.service';
import {NotificationService} from '../../shared/notification/notification.service';
import {Observable} from 'rxjs/Observable';
import {ImageUploadService} from '../../service/imageUpload.service';
import {ImageUploadModel} from '../image/imageUpload-model';
import {NotificationType} from '../../shared/notification/notification-type.model';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-add-association',
    templateUrl: './add-association.component.html',
    styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {

    association: any = {};
    selectedFile: File = null;
    selectedFiles: FileList;
    _getImages: Observable<any[]>;
    currentFileUpload: ImageUploadModel;
    progress: {percentage: number} = {percentage: 0};
    fileData: File = null;
    previewUrl: any = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;

    constructor(
        private associationService: AssociationService,
        private notificationService: NotificationService,
        private imageUploadService: ImageUploadService,
        private http: HttpClient,
    ) {}
    ngOnInit() {
        this.association.logo = {path: ''};
    }

    save() {
      //  this.upload();
      //  const association =  this.association;
      //  console.log(this.association);
      //  this.associationService.newAssociation = association;
      //      this.associationService.save(association)
      //          .subscribe(
      //              () => {
      //                  // message de notification
      //                  this.notificationService.addNotification(NotificationType.SUCCESS, 'Nouvelle association enregistrée !! .');
      //              });
    }

  fileProgress(fileInput: any) {
    // this.fileData = <File>fileInput.target.files[0];
    // this.preview();
  }

  onSelectedFile(event) {
      this.selectedFile = <File> event.target.files[0];
  }
  published() {
      console.log(this.selectedFile);
      console.log(this.association.name);
    this.imageUploadService.upload(this.selectedFile, this.association.name);

    // this.imageUploadService.published(this.selectedFile);
  }
}

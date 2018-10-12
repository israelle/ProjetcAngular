import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../service/association.service';
import {NotificationService} from '../../shared/notification/notification.service';
import {NotificationType} from '../../shared/notification/notification-type.model';
import {ImageUploadService} from '../../service/imageUpload.service';
import {ImageUploadModel} from '../image/imageUpload-model';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-add-association',
    templateUrl: './add-association.component.html',
    styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {

    association: any = {};
    selectedFile: any;
    selectedFiles: FileList;
    _getImages: Observable<any[]>;
    currentFileUpload: ImageUploadModel;
    progress: {percentage: number} = {percentage: 0};

    constructor(
        private associationService: AssociationService,
        private notificationService: NotificationService,
        private imageUploadService: ImageUploadService,
        private db: AngularFireDatabase
    ) {}
    ngOnInit() {
        this.association.logo = {path: ''};
        // this.imageUploadService.getImages('/uploads')
        //     .subscribe(imgage => {
        //         console.log('imgage', imgage);
        //     });
        // this.imageUploadService.getImages('/uploads').subscribe( images => {
        //     // this._getImages = images;
        // });
      // this._getImages = this.getImages('/uploads');
     //  console.log('this._getImages', this._getImages);
    }

    onselected(event) {
        this.selectedFile = event.target.files[0];
    }

    getImages(listPath): Observable<any[]> {
        return this.db.list(listPath).valueChanges();
    }
    save() {
      //  this.upload();
       const association =  this.association;
       this.associationService.newAssociation = association;
       if (this.upload()) {
           this.associationService.save(association)
               .subscribe(
                   () => {
                       // message de notification
                       this.notificationService.addNotification(NotificationType.SUCCESS, 'Nouvelle association enregistrée !! .');
                   });
       }
    }

    selectFile(event) {
        this.selectedFiles = event.target.files;
    }

    upload() {
        const file = this.selectedFiles.item(0);
        this.currentFileUpload = new ImageUploadModel(file);
        this.imageUploadService.pushFileToStorage(this.currentFileUpload, this.progress);

        this.association.logo.path = this.currentFileUpload.getUrl();
        this.association.logo.name = this.currentFileUpload.file.name;
        // récupérer le lien lorsque la barre des tache a fini

    }
}

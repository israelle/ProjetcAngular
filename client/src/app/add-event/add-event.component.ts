import { Component, OnInit } from '@angular/core';
import {EventSharedService} from '../event/event-shared.service';
import * as _ from 'lodash';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {Validators} from '@angular/forms';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
    private selectedFile: File;
    ref: AngularFireStorageReference;
    task: AngularFireUploadTask;
    uploadProgress: Observable<number>;
    downloadURL: Observable<string>;
    showProgressBar: boolean;
    private newSelectedFile: File;

  constructor(private eventSharedService: EventSharedService,
              private db: AngularFireDatabase,
              private afStorage: AngularFireStorage) { }
  event: any = [];
    fileName = '';


  ngOnInit() {
    this.event.association = {};
      this.event.association.logo = '';
  }

    onselected(event) {
      this.selectedFile = event.target.files[0];

    }

    saveFile(file: File) {
        console.log('file : ', file);
        const id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(file);
        this.uploadProgress = this.task.percentageChanges();
       // this.downloadURL = this.task.downloadURL();
    }


  save() {

      const infoEvent = this.event;
      console.log('infoEvent');
      console.log(infoEvent);
      // if (infoEvent.association.logo !== '') {
      //     infoEvent.association.logo = this.selectedFile;
      // }


      this.eventSharedService.postEvent(infoEvent);
      console.log('this.selectedFile');
      console.log(this.selectedFile);
      this.saveFile(this.selectedFile);

      const reader = new FileReader();
      reader.onload = (event2: any) => {
              this.selectedFile = event2.target.result;
          };
          reader.readAsDataURL(this.selectedFile);
  }

}

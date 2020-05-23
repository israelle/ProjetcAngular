import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
import { ImageUploadModel } from '../app/image/imageUpload-model';
// import {AngularFireDatabase} from '@angular/fire/database';
// import {FirebaseListObservable} from '@angular/fire/database-deprecated';
import * as FileSaver from 'file-saver';

import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {RequestOptions} from '@angular/http';

@Injectable()
export class ImageUploadService {
    // private basePath = '/uploads';
    // private _images: FirebaseListObservable<any[]>;
    //
    constructor(private httpClient: HttpClient) { }
    //
    // get images(): FirebaseListObservable<any[]> {
    //     return this._images;
    // }
    //
    // set images(value: FirebaseListObservable<any[]>) {
    //     this._images = value;
    // }
    //
    // private saveFileData(fileUpload: ImageUploadModel) {
    //     this.db.list(`${this.basePath}/`).push(fileUpload);
    //     console.log('fileUpload', fileUpload);
    // }
    //
    // pushFileToStorage(fileUpload: ImageUploadModel, progress: {percentage: number}) {
    //     const storageRef = firebase.storage().ref();
    //     const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
    //
    //     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //         (snapshot) => {
    //             // in progress
    //             const snap = snapshot as firebase.storage.UploadTaskSnapshot;
    //             progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
    //         },
    //         (error) => {
    //             // fail
    //             console.log(error);
    //         },
    //         () => {
    //             // success
    //              uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //
    //                 // console.log('fileUpload', fileUpload);
    //                 // console.log('fileUpload.url:', fileUpload.url);
    //                 // this.associationService.newAssociation.logo.path = fileUpload.url;
    //                  if (progress.percentage === 100) {
    //                      fileUpload.url = downloadURL;
    //                      fileUpload.name = fileUpload.file.name;
    //                      console.log('fileUpload: ', fileUpload);
    //                      // this.saveFileData(fileUpload);
    //                  }
    //              });
    //
    //         });
    // }
    //
    // getImages(listPath) {
    //     return this.db.list(listPath).valueChanges();
    // }

  public updateImage(associationId: number, image: File) {
    const formData = new FormData();
    formData.append('image', image);

    const endPoint = `${environment.api_url}/pictures/${associationId}/update`;

   // return this.uploadFile(endPoint, formData);
  }

  public upload(image: File, name: string) {
      console.log(image);
    const logo = new FormData();
    logo.append('image', image);
    logo.append('name', name);
    const endPoint = `${environment.api_url}/upload/${name}`;

    this.httpClient.post(endPoint, logo)
      .subscribe(response => {
        FileSaver.saveAs(response, name);
      });
  }

  public published(selectedFile) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const formData = new FormData();
    formData.append('urlPubli', selectedFile);
    const body = {
      urlPubli: selectedFile,
    };
    console.log( body);

    return this.httpClient.post(environment.api_url + 'upload/' + selectedFile.name, body.urlPubli).subscribe(data => {
      console.log(data);
    });
  }

}


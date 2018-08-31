import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { ImageUploadModel } from '../app/image/imageUpload-model';
import {Observable} from 'rxjs/Observable';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';


@Injectable()
export class ImageUploadService {
    get images(): FirebaseListObservable<any[]> {
        return this._images;
    }

    set images(value: FirebaseListObservable<any[]>) {
        this._images = value;
    }

    private basePath = '/uploads';
    private _images: FirebaseListObservable<any[]>;

    constructor( private db: AngularFireDatabase) {
        // this._images = db.list('uploads');
    }

    pushFileToStorage(fileUpload: ImageUploadModel, progress: {percentage: number}) {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                // in progress
                const snap = snapshot as firebase.storage.UploadTaskSnapshot;
                progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            },
            (error) => {
                // fail
                console.log(error);
            },
            () => {
                // success
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    fileUpload.url = downloadURL;
                    console.log('fileUpload', fileUpload);
                    console.log('fileUpload.url', fileUpload.url);
                    });
                fileUpload.name = fileUpload.file.name;
                this.saveFileData(fileUpload);
            }
        );
    }


    getImages(listPath) {
        return this.db.list(listPath).valueChanges();
    }


    private saveFileData(fileUpload: ImageUploadModel) {
        this.db.list(`${this.basePath}/`).push(fileUpload);
    }
}


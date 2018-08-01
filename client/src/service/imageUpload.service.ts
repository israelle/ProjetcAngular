import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { ImageUploadModel } from '../app/image/imageUpload-model';


@Injectable()
export class ImageUploadService {

    private basePath = '/uploads';
    constructor( private db: AngularFireDatabase) { }

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
                    });
                fileUpload.name = fileUpload.file.name;
                this.saveFileData(fileUpload);
            }
        );
    }


    private saveFileData(fileUpload: ImageUploadModel) {
        console.log(this.db);
        this.db.list(`${this.basePath}/`).push(fileUpload);
    }
}


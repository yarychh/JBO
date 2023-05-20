import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) {
    }

    // saveURLToFirestore(downloadURL: string, colName: string, docId: string): void {
    //     const collectionRef = this.firestore.collection('careers');
    //     const documentRef = collectionRef.doc('');
    //
    //     documentRef.update({fileURL: downloadURL})
    //         .then(() => {
    //             console.log('URL saved to Firestore successfully');
    //         })
    //         .catch((error) => {
    //             console.error('Error saving URL to Firestore:', error);
    //         });
    // }
    //
    // uploadFileAndSaveToFirestore(file: File, colName: string, docId: string): void {
    //     const filePath = 'CVs/' + file.name;
    //
    //     // Upload the file to Firebase Storage
    //     const task = this.storage.upload(filePath, file);
    //
    //     // Get the download URL of the uploaded file
    //     task.snapshotChanges().subscribe((snapshot) => {
    //         if (snapshot) {
    //             if (snapshot.state === 'success') {
    //                 const downloadURL = snapshot.metadata.fullPath;
    //                 // this.saveURLToFirestore(downloadURL);
    //             }
    //         }
    //     });
    // }
}


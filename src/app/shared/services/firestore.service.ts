import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IArticle, IEvent, IReview, IStats } from '../constants/firebase.interface';

@Injectable({
    providedIn: 'root',
})
export class FirestoreService {
    constructor(private _firestore: AngularFirestore) {}

    public getEvents(): Observable<IEvent[]> {
        return this._firestore
            .collection('events')
            .valueChanges() as Observable<IEvent[]>;
    }

    public getReviews(): Observable<IReview[]> {
        return this._firestore
            .collection('reviews')
            .valueChanges() as Observable<IReview[]>;
    }

    public getStats(): Observable<IStats[]> {
        return this._firestore
            .collection('statistics')
            .valueChanges() as Observable<IStats[]>;
    }

    public getBlogArticles(): Observable<IArticle[]> {
        return this._firestore
            .collection('blog-articles')
            .valueChanges() as Observable<IArticle[]>
    }

    public submitCVForm(fd: FormData): Promise<any> {
        return this._firestore
            .collection('careers')
            .add(fd);
    }

    public submitQuestionForm(fd: FormData): Promise<any> {
        return this._firestore
            .collection('questions')
            .add(fd);
    }

    public submitForm(data: any): Promise<DocumentReference<unknown>> {
        return this._firestore
            .collection('submissions')
            .add({
                ...data,
                date: new Date(Date.now()).toUTCString()
            });
    }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IEvent } from '../constants/event.interface';
import { IReview } from '../constants/review.interface';
import { IStats } from '../constants/stats.interface';

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

    public submitForm(data: any): Promise<DocumentReference<unknown>> {
        return this._firestore
            .collection('submissions')
            .add({
                ...data,
                date: new Date(Date.now()).toUTCString()
            });
    }
}

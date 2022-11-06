import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IEvent } from '../constants/event.interface';
import { IReview } from '../constants/review.interface';

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
}

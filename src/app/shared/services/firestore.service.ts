import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    DocumentReference,
} from '@angular/fire/compat/firestore';
// import { doc, getDoc, getDoc } from 'firebase/firestore';
import { Observable, map, tap } from 'rxjs';
import {
    IArticle,
    IEvent,
    IReview,
    IStats,
} from '../constants/firebase.interface';

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

    public getBlogArticles(
        amount: number = 3,
        options?: {
            startAfter?: number;
            endBefore?: number;
        }
    ): Observable<IArticle[]> {
        return this._firestore
            .collection('blog-articles', (ref) => {
                if (options?.startAfter) {
                    return ref.startAfter(options.startAfter).limit(amount);
                } else if (options?.endBefore) {
                    return ref.endBefore(options.endBefore).limit(amount);
                } else {
                    return ref.limit(amount);
                }
            })
            .snapshotChanges()
            .pipe(
                map((actions: any) => {
                    return actions.map((a: any) => {
                        const data = a.payload.doc.data();
                        const id = a.payload.doc.id;
                        return { id, ...data };
                    });
                }),
            ) as Observable<IArticle[]>;
    }

    getBlogArticlesLength(): Observable<number> {
        return this._firestore
            .collection('blog-articles')
            .valueChanges()
            .pipe(map((articles) => articles.length)) as Observable<number>;
    }

    public getArticle(id: string): Observable<IArticle> {
        // const docRef = doc(this._firestore, 'blog-articles', "SF");
        // const docSnap = await getDoc(docRef);
        // return this._firestore.collection('blog-articles').
        return this._firestore
            .collection('blog-articles')
            .doc(id)
            .valueChanges() as Observable<IArticle>;
    }

    public submitCVForm(fd: FormData): Promise<any> {
        return this._firestore.collection('careers').add(fd);
    }

    public submitQuestionForm(fd: FormData): Promise<any> {
        return this._firestore.collection('questions').add(fd);
    }

    public submitForm(data: any): Promise<DocumentReference<unknown>> {
        return this._firestore.collection('submissions').add({
            ...data,
            date: new Date(Date.now()).toUTCString(),
        });
    }
}

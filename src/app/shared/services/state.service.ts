import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
    private role$ = new BehaviorSubject<'affiliate' | 'advertiser'>('affiliate');

    constructor() { }

    public getRole(): string {
        return this.role$.getValue()
    }
}

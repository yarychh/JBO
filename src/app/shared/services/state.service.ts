import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Role } from '../constants/role.enum';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    private role$ = new BehaviorSubject<Role>(Role.Affiliate);

    constructor() {}

    public getRole(): Observable<Role> {
        return this.role$ as Observable<Role>;
    }

    public get isDark(): boolean{
        return this.role$.getValue() === Role.Advertiser;
    }

    public toggleRole(): void {
        if (this.role$.getValue() === Role.Advertiser) {
            this.role$.next(Role.Affiliate)
        } else {
            this.role$.next(Role.Advertiser)
        }
    }
}

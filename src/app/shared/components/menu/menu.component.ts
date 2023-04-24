import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { BehaviorSubject, fromEvent } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    public full$ = new BehaviorSubject<boolean>(true);
    public shown = false;
    public menuItems = [
        {
            name: 'home',
            url: '/home'
        },
        {
            name: 'about-us',
            url: '/about-us'
        },
        {
            name: 'careers',
            url: '/careers'
        }
    ]

    constructor(private state: StateService,
                private router: Router) {
        this.burger();
        fromEvent(window, 'resize').subscribe(() => this.burger());
    }

    public burger(): void {
        document.documentElement.clientWidth < 500
            ? this.full$.next(false)
            : this.full$.next(true);
    }

    public toggleShown(): void {
        this.shown = !this.shown;
    }

    public scrollto(id: string): void {
        const element = document.getElementById(id);
        element?.scrollIntoView();
    }

    public redirectTo(pageName: string): void {
        this.router.navigate(['', pageName]);
    }

    public getActiveTab(): void {
    }
}

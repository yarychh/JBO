import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, fromEvent } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public full$ = new BehaviorSubject<boolean>(true);
    public activeMenuItem$ = new BehaviorSubject<boolean>(false);
    public currentRoute: string = '';
    public shown = false;

    public menuItems = [
        {
            name: 'home',
            url: '/home',
        },
        {
            name: 'about-us',
            url: '/about-us',
        },
        {
            name: 'careers',
            url: '/careers',
        },
        {
            name: 'blog',
            url: '/blog',
        },
        {
            name: 'contacts',
            url: '/contacts',
        },
    ]

    constructor(private state: StateService,
                private router: Router) {
        fromEvent(window, 'resize').subscribe(() => this.burger());
        this.burger();

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
                this.currentRoute = event.url;
            }
        });
    }

    ngOnInit() {
    }

    public burger(): void {
        document.documentElement.clientWidth < 972
            ? this.full$.next(false)
            : this.full$.next(true);
    }

    public toggleShown(): void {
        this.shown = !this.shown;
    }

    public redirectTo(pageName: string): void {
        const checkbox = document.getElementById('navi-toggle');
        if (checkbox != null) checkbox.click();

        this.router.navigate(['', pageName]).then(() => this.getActiveTab(pageName));
    }

    public getActiveTab(pageName: string): void {
        '/' + pageName === this.currentRoute
            ? this.activeMenuItem$.next(true)
            : this.activeMenuItem$.next(false);
    }

    public index(index: number) {
        return index;
    }
}

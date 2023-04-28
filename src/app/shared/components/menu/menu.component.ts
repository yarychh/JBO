import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, fromEvent } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public full$ = new BehaviorSubject<boolean>(true);
    public shown = false;

    constructor(private state: StateService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.burger();
        fromEvent(window, 'resize').subscribe(() => this.burger());
    }

    ngOnInit() {
        console.log(this.activatedRoute.url)
    }

    public burger(): void {
        document.documentElement.clientWidth < 972
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

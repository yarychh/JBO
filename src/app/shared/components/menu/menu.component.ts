import { isPlatformBrowser } from '@angular/common';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { Component } from '@angular/core';
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

    public get isDark(): boolean {
        return this.state.isDark;
    }

    constructor(private state: StateService, @Inject(PLATFORM_ID) private platformId: any,) {
        this.burger();
        if (isPlatformBrowser(this.platformId)) {
            fromEvent(window, 'resize').subscribe(() => this.burger());
        }
    }

    public burger(): void {
        if (isPlatformBrowser(this.platformId)) {
            document.documentElement.clientWidth < 500
                ? this.full$.next(false)
                : this.full$.next(true);
        }
    }

    public toggleShown(): void {
        this.shown = !this.shown;
    }

    public scrollto(id: string): void{
        if (isPlatformBrowser(this.platformId)) {
            const element = document.getElementById(id);
            element?.scrollIntoView();
        }
    }
}

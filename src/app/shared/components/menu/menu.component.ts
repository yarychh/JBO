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

    constructor(private state: StateService) {
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
}

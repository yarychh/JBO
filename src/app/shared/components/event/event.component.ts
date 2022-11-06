import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IEvent } from '../../constants/event.interface';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit, OnDestroy {
    @Input() event!: IEvent;

    public get isDark(): boolean {
        return this.state.isDark;
    }
    public currentLang!: string;

    constructor(
        private state: StateService,
        private translate: TranslateService
    ) {
        this.currentLang = translate.currentLang;
    }

    ngOnInit(): void {
        this.translate.onLangChange.subscribe((event) => {
            this.currentLang = event.lang;
        });
        console.log(this.event);

    }

    ngOnDestroy(): void {
        this.translate.onLangChange.unsubscribe();
    }
}

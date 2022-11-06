import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IEvent } from '../../constants/event.interface';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
    @Input() event!: IEvent;
    @Input() lang!: string;

    public get isDark(): boolean {
        return this.state.isDark;
    }

    constructor(private state: StateService) {}

    ngOnInit(): void {}
}

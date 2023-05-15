import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from "../../constants/firebase.interface";
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

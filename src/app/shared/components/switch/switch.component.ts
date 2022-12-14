import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
    @Input() checked: boolean = false;

    constructor() { }
}

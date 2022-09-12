import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-pill',
    templateUrl: './pill.component.html',
    styleUrls: ['./pill.component.scss'],
})
export class PillComponent implements OnInit {
    @Input() number!: string;
    @Input() description!: string;

    public get isDark(): boolean {
        return this.state.isDark;
    }
    constructor(private state: StateService) {}

    ngOnInit(): void {}
}

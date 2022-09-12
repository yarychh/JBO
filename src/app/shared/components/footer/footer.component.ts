import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    constructor(private state: StateService) {}

    public get isDark(): boolean {
        return this.state.isDark;
    }

    ngOnInit(): void {}
}

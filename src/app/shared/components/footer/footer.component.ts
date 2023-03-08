import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    constructor(private state: StateService) {}

    public get isDark(): boolean {
        return this.state.isDark;
    }
}

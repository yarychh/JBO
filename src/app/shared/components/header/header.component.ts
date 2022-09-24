import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../../constants/role.enum';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private state: StateService) {
        this.roleChange();
    }

    public get role$(): Observable<Role> {
        return this.state.getRole();
    }

    public get isDark(): boolean {
        return this.state.isDark;
    }

    public roleChange(): void {
        this.state.toggleRole();
        document.body.classList.toggle('dark');
    }
}

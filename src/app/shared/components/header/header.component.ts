import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Role } from '../../constants/role.enum';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    public currentLang = '';
    constructor(private state: StateService, private translate: TranslateService) { }

    ngOnInit(): void {
        this.translate.onLangChange.subscribe((event) => {
            this.currentLang = event.lang;
        });
    }
    ngOnDestroy(): void {
        this.translate.onLangChange.unsubscribe();
    }

    public get role$(): Observable<Role> {
        return this.state.getRole();
    }

    public selected(lang: string): boolean {
        return lang  === this.currentLang;
    }

    public roleChange(): void {
        this.state.toggleRole();
        document.body.classList.toggle('dark');
    }

    public langChange(event: any): void {
        const lang = event.target.value;
        this.translate.use(lang);
    }
}

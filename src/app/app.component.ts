import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private translate: TranslateService,
                public sanitizer: DomSanitizer) {
        translate.use('en');
    }

    title = 'JBO';
}

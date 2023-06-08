import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PartnersComponent } from '../partners/partners.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, TranslateModule, PartnersComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

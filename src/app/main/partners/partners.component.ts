import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    imports: [CommonModule, TranslateModule],
    styleUrls: ['./partners.component.scss'],
    standalone: true,
})
export class PartnersComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
    public formHeading: string = 'careers_heading';
    public formSubHeading: string = 'careers_subheading';
    public fileBtnName: string = 'careers_file-btn';

    constructor() {
    }

    ngOnInit(): void {
    }
}

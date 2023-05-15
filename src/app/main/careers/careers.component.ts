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
    public formHeading: string = 'Be a part of our team';
    public formSubHeading: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
    public fileBtnName: string = 'Add your CV';

    constructor() {
    }

    ngOnInit(): void {
    }
}

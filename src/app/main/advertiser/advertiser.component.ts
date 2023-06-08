import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-advertiser',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './advertiser.component.html',
    styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {
    public advertiserCards = [
        {
            head: 'advertiser_feature-1_heading',
            text: 'advertiser_feature-1_subheading'
        },
        {
            head: 'advertiser_feature-2_heading',
            text: 'advertiser_feature-2_subheading'
        },
        {
            head: 'advertiser_feature-3_heading',
            text: 'advertiser_feature-3_subheading'
        },
        {
            head: 'advertiser_feature-4_heading',
            text: 'advertiser_feature-4_subheading'
        }
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

    public index(index: number) {
        return index;
    }
}

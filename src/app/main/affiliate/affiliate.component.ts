import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: 'app-affiliate',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './affiliate.component.html',
    styleUrls: ['./affiliate.component.scss']
})
export class AffiliateComponent implements OnInit {
    public affiliateCards = [
        {
            head: 'affiliate_feature-1_heading',
            text: 'affiliate_feature-1_subheading'
        },
        {
            head: 'affiliate_feature-2_heading',
            text: 'affiliate_feature-2_subheading'
        },
        {
            head: 'affiliate_feature-3_heading',
            text: 'affiliate_feature-3_subheading'
        },
        {
            head: 'affiliate_feature-4_heading',
            text: 'affiliate_feature-4_subheading'
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

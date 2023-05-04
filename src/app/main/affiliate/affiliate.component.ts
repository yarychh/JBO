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
            head: 'Best support',
            text: 'Our support works even at night to be always in touch for you <3'
        },
        {
            head: 'Best support',
            text: 'Our support works even at night to be always in touch for you <3'
        },
        {
            head: 'Best support',
            text: 'Our support works even at night to be always in touch for you <3'
        },
        {
            head: 'Best support',
            text: 'Our support works even at night to be always in touch for you <3'
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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-advertiser',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './advertiser.component.html',
    styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {
    public advertiserCards = [
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

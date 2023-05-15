import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-card',
    templateUrl: './blog-card.component.html',
    styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
    @Input() public title!: string;
    @Input() public text?: string;
    @Input() public date!: string;

    constructor() {
    }

    ngOnInit(): void {
    }
}

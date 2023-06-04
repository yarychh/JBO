import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog-card',
    templateUrl: './blog-card.component.html',
    styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
    @Input() public title!: string;
    @Input() public id!: string;
    @Input() public subtitle!: string;
    @Input() public date!: string;
    @Input() public image!: string;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        console.log(this.image);
    }

    goToArticle(): void {
        this.router.navigate(['article', encodeURI(this.id)]);
    }
}

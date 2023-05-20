import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from "../../shared/constants/firebase.interface";
import { FirestoreService } from "../../shared/services/firestore.service";

@Component({
    selector: 'app-blog-article',
    templateUrl: './blog-article.component.html',
    styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
    @Input() public articleList?: IArticle[];
    @Input() public article?: IArticle;


    constructor(private firestore: FirestoreService) {

    }

    ngOnInit(): void {
    }

}

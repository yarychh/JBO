import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../shared/constants/firebase.interface';
import { FirestoreService } from '../../shared/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-blog-article',
    templateUrl: './blog-article.component.html',
    styleUrls: ['./blog-article.component.scss'],
})
export class BlogArticleComponent implements OnInit {
    @Input() public articleList?: IArticle[];
    @Input() public article?: IArticle;

    constructor(
        private acrivetdRoute: ActivatedRoute,
        private firestore: FirestoreService
    ) {}

    ngOnInit(): void {
        this.acrivetdRoute.params
            .pipe(first())
            .subscribe(
                async ({ id }) =>
                    (this.article = await firstValueFrom(
                        this.firestore.getArticle(decodeURI(id))
                    ))
            );
    }
}

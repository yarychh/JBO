import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { firstValueFrom } from "rxjs";
import { SwiperComponent, SwiperModule } from "swiper/angular";
import { IEvent } from "../../shared/constants/event.interface";
import { IReview } from "../../shared/constants/review.interface";
import { IStats } from "../../shared/constants/stats.interface";
import { FirestoreService } from "../../shared/services/firestore.service";
import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule, SwiperModule],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    public eventsList?: IEvent[];
    public reviewList?: IReview[];
    public statisticsList?: IStats[];

    @ViewChild('reviews', {static: false}) reviews?: SwiperComponent;
    @ViewChild('statistics', {static: false}) statistics?: SwiperComponent;
    @ViewChild('swiperEvents', {static: false}) events?: SwiperComponent;

    public isDark?: boolean;
    public currentLang: string = 'en';

    public eventsBreakpoints = {
        600: {slidesPerView: 1},
        730: {slidesPerView: 1.4},
        1000: {
            slidesPerView: 2.4,
            spaceBetween: 32
        },
        1700: {slidesPerView: 2.5}
    };

    public statsBreakpoints = {
        500: {slidesPerView: 1},
        900: {slidesPerView: 2},
        1800: {slidesPerView: 3}
    }

    constructor(private firestore: FirestoreService) {
    }

    async ngOnInit(): Promise<void> {
        this.eventsList = await firstValueFrom(this.firestore.getEvents());
        this.reviewList = await firstValueFrom(this.firestore.getReviews());
        this.statisticsList = await firstValueFrom(this.firestore.getStats());
    }

    public slideNext(identifier: string): void {
        switch (identifier) {
            case 'reviews':
                this.reviews?.swiperRef.slideNext();
                break;
            case 'statistics':
                this.statistics?.swiperRef.slideNext();
                break;
            case 'events':
                this.events?.swiperRef.slideNext();
                break;
            default:
                break;
        }
    }

    public slidePrev(identifier: string): void {
        switch (identifier) {
            case 'reviews':
                this.reviews?.swiperRef.slidePrev();
                break;
            case 'statistics':
                this.statistics?.swiperRef.slidePrev();
                break;
            case 'events':
                this.events?.swiperRef.slidePrev();
                break;
            default:
                break;
        }
    }

    public trackByIndex(index: number) {
        return index;
    }
}

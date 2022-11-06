import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { IEvent } from 'src/app/shared/constants/event.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { StateService } from 'src/app/shared/services/state.service';
import SwiperCore, { Keyboard, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Keyboard, Virtual]);

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
    public advertizerForm!: FormGroup;

    @ViewChild('reviews', { static: false }) reviews?: SwiperComponent;
    @ViewChild('statistics', { static: false }) statistics?: SwiperComponent;
    @ViewChild('swiperEvents', { static: false }) events?: SwiperComponent;

    public eventsList?: IEvent[];

    constructor(private state: StateService, private fb: FormBuilder, public firestore: FirestoreService) {
        this.advertizerForm = this.fb.group({
            companyType: [null, Validators.required],
            geo: [null, Validators.required],
            email: [null, {validators: [Validators.email, Validators.required], updateOn: 'blur'}],
            skype: [null],
            telegram: [null],
        });
    }

    public get isDark(): boolean {
        return this.state.isDark;
    }

    public breakpoints = {
        600: {
            slidesPerView: 1.2,
        },

        730: {
            slidesPerView: 1.4,
        },
        1000: {
            slidesPerView: 1.7
        },
        1700: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 30
        },
    };

    async ngOnInit(): Promise<void> {
        this.eventsList = await firstValueFrom(this.firestore.getEvents());
    }

    public sendForm(): void {
        console.log('formValue', this.advertizerForm.value);
        this.advertizerForm.reset();
    }

    public async paste(controlName: string): Promise<void> {
        const control = this.advertizerForm.get(controlName);
        const pasteData = await navigator.clipboard.readText();
        control?.setValue(pasteData);
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
}

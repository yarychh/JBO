import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
    @Input() public heading: string = 'QUESTIONS?';
    @Input() public subHeading: string = '';
    @Input() public withUpload: boolean = false;
    @Input() public uploadBtnName: string = '';

    public formGroup!: FormGroup;

    get fc() {
        return this.formGroup.controls;
    }

    constructor(private firestore: FirestoreService) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    public initForm(): void {
        this.formGroup = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            question: new FormControl(null, [Validators.required]),
            cv: new FormControl(null)
        })
    }

    public submitForm(fg: FormGroup): void {
        const fd = {

        }
        console.log(fg.value)

        if (fg.invalid) return;
        this.withUpload
            ? this.firestore.submitCVForm(fg.value)
            : this.firestore.submitQuestionForm(fg.value);
    }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FirestoreService } from "../../services/firestore.service";

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
    public contactFormGroup!: FormGroup;
    public get fc() {
        return this.contactFormGroup.controls;
    }

    constructor(private firestore: FirestoreService) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    public initForm(): void {
        this.contactFormGroup = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            question: new FormControl(null, [Validators.required])
        })
    }

    public submitQuestionsForm(fg: FormGroup): void {
        if (fg.invalid) return;
        this.firestore.submitForm(fg.value).then(() => fg.reset())
    }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FirestoreService } from "../../shared/services/firestore.service";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            question: new FormControl('', [Validators.required])
        })
    }

    public submitQuestionsForm(fg: FormGroup): void {
        if (fg.invalid) return;
        this.firestore.submitForm(fg.value).then(() => fg.reset())
        // this.contactFormGroup.reset();
    }
}

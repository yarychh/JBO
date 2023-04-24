import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    public contactFormGroup!: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.initForm();
        console.log(this.contactFormGroup);
    }

    public initForm(): void {
        this.contactFormGroup = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.email]),
            question: new FormControl('', [Validators.required])
        })
    }

}

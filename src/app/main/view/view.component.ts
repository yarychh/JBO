import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
    public advertizerForm!: FormGroup;

    constructor(private state: StateService, private fb: FormBuilder) {
        this.advertizerForm = this.fb.group({
            companyType: [null, Validators.required],
            geo: [null, Validators.required],
            email: [null, [Validators.email, Validators.required]],
            skype: [null],
            telegram: [null],
        });
    }

    public get isDark(): boolean {
        return this.state.isDark;
    }

    ngOnInit(): void {}

    public sendForm(): void {
        console.log('formValue', this.advertizerForm.value);
        this.advertizerForm.reset();
    }

    public async paste(controlName: string): Promise<void>{
        const control = this.advertizerForm.get(controlName);
        const pasteData = await navigator.clipboard.readText();
        control?.setValue(pasteData);

    }
}

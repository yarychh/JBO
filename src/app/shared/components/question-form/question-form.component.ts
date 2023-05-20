import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JBO_EMAIL } from "../../constants/firebase.interface";
import { FirestoreService } from '../../services/firestore.service';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss'],

})
export class QuestionFormComponent implements OnInit {
    public JBOemail: string = JBO_EMAIL;

    @Input() public heading: string = 'QUESTIONS?';
    @Input() public subHeading: string = '';
    @Input() public withUpload: boolean = false;
    @Input() public uploadBtnName: string = '';

    public fg!: FormGroup;

    get fc() {
        return this.fg.controls;
    }

    constructor(private firestore: FirestoreService) {
    }

    ngOnInit(): void {
        this.initForm();
        console.log(this.fg);
    }

    public initForm(): void {
        this.withUpload
        ? this.fg = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            coverLetter: new FormControl(null, [Validators.required]),
            cv: new FormControl(null, [Validators.required])
        })
        : this.fg = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            question: new FormControl(null, [Validators.required]),
        })
    }

    autoGrowTextZone(e: KeyboardEvent) {
        const element = e.target as HTMLTextAreaElement;
        element.style.height = "0px";
        element.style.height = (element.scrollHeight + 10)+"px";
      }

    public submitForm(fg: FormGroup): void {
        if (fg.invalid) return;
        this.withUpload
            ? this.sendCareersLetter()
            : this.firestore.submitQuestionForm(fg.value);
        this.fg.reset();
    }

    public setCvFileValue(file: File): void {
        this.fc['cv'].setValue(file);
    }


    sendCareersLetter() {
        const emailSubject = 'JBOmarketing careers letter';
        const emailBody = `${this.fc['coverLetter'].value} \n Specified Email: ${this.fc['email'].value}`;
        const file = this.fc['cv'].value;

        let mailToUrl = `mailto:${this.JBOemail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (fileLoadedEvent: any) => {
                const fileData = fileLoadedEvent.target.result;
                const attachment = `attachment;filename="${file.name}";base64,${fileData}`;
                mailToUrl += `&attachment=${encodeURIComponent(attachment)}`;

                // Open the email client
                window.open(mailToUrl);
            };
            fileReader.readAsDataURL(file);
        } else {
            // Open the email client without the file attachment
            window.open(mailToUrl);
        }
    }
}

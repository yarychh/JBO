import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JBO_EMAIL } from '../../constants/firebase.interface';
import { FirestoreService } from '../../services/firestore.service';
declare let Email: any;
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

    ngOnInit(): void {
        this.initForm();
        console.log(this.fg);
    }

    public initForm(): void {
        this.withUpload
            ? (this.fg = new FormGroup({
                  name: new FormControl(null, [Validators.required]),
                  email: new FormControl(null, [
                      Validators.required,
                      Validators.email,
                  ]),
                  coverLetter: new FormControl(null, [Validators.required]),
                  cv: new FormControl(null, [Validators.required]),
              }))
            : (this.fg = new FormGroup({
                  name: new FormControl(null, [Validators.required]),
                  email: new FormControl(null, [
                      Validators.required,
                      Validators.email,
                  ]),
                  question: new FormControl(null, [Validators.required]),
              }));
    }

    autoGrowTextZone(e: KeyboardEvent) {
        const element = e.target as HTMLTextAreaElement;
        element.style.height = '0px';
        element.style.height = element.scrollHeight + 10 + 'px';
    }

    public async submitForm(fg: FormGroup): Promise<void> {
        if (fg.invalid) return Promise.resolve();
        this.withUpload
            ? this.sendCareersLetter()
            : this.sendQuestionLetter();
    }

    public setCvFileValue(file: File): void {
        this.fc['cv'].setValue(file);
    }

    sendCareersLetter(): void {
        const payload = {
            name: this.fc['name'].value,
            email: this.fc['email'].value,
            subject: 'Careers JBOmarketing',
            message: this.fc['coverLetter'].value,
            attachment: this.fc['cv'].value,
        };

        this.sendEmail(payload);
    }

    public sendQuestionLetter(): void {
        const payload = {
            name: this.fc['name'].value,
            email: this.fc['email'].value,
            subject: 'Question form JBOmarketing',
            message: this.fc['question'].value,
        };

        this.sendEmail(payload);
    }

    public async sendEmail(payload: {
        name: string;
        email: string;
        subject: string;
        message: string;
        attachment?: File;
    }): Promise<void> {
        let attachments;
        if (payload.attachment) {
            const toBase64 = (file: File) =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = reject;
                });
            attachments = [{
                name: payload.attachment.name,
                data: await toBase64(payload.attachment)
            }];
        }

        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'info@jbomarketing.space',
            Password: '70342287F4F66AEE0622B5D28D0E75349393',
            To: 'odarka@jbomarketing.space',
            From: 'odarka@jbomarketing.space',
            Subject: payload.subject,
            Body: `
            <b>From:</b>

            <br>
            ${payload.name}

            <br>

            <b>Message content:</b>

            <br>
            ${payload.message}

            `,
            Attachments: attachments,
        }).then(() => {
            this.fg.reset();
            this.withUpload = false;
        });
    }
}

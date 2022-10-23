import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
    @Input() question!: string;
    @Input() answer!: string;
    public shown = false;

    public get isDark(): boolean {
        return this.state.isDark;
    }
    constructor(private state: StateService) {}

    ngOnInit(): void {}
}

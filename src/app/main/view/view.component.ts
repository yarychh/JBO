import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    constructor(private state: StateService, private fb: FormBuilder) { }

    public get isDark(): boolean{
        return this.state.isDark;
    }

  ngOnInit(): void {
  }

}

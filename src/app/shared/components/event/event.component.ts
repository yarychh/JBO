import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

    public get isDark(): boolean {
        return this.state.isDark;
    }
    constructor(private state: StateService) {}

  ngOnInit(): void {
  }

}

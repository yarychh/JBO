import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow-pill',
  templateUrl: './flow-pill.component.html',
  styleUrls: ['./flow-pill.component.scss']
})
export class FlowPillComponent implements OnInit {
    @Input() heading!: string;
    @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

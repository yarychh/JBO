import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affiliate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.scss']
})
export class AffiliateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

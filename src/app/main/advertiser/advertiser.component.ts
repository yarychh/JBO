import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advertiser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

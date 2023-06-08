import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-doc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-doc.component.html',
  styleUrls: ['./privacy-doc.component.scss']
})
export class PrivacyDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

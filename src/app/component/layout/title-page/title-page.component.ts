import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  // Tao input layout form content de truyen vao cho tung component
  @Input()
  content: string;

  constructor() {
  }

  ngOnInit() {
  }

}

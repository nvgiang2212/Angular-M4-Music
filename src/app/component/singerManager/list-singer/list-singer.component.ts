import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-singer',
  templateUrl: './list-singer.component.html',
  styleUrls: ['./list-singer.component.scss']
})
export class ListSingerComponent implements OnInit {
  title = 'Danh Sách Ca Sĩ';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song/song";
import {SongService} from "../../../service/song/song.service";
import {SingerInfo} from "../../../model/singer/singer-info";
import {SingerManagerService} from "../../../service/singerManager/singer-manager.service";

@Component({
  selector: 'app-list-singer-user',
  templateUrl: './list-singer-user.component.html',
  styleUrls: ['./list-singer-user.component.scss']
})
export class ListSingerUserComponent implements OnInit {

  listSinger: SingerInfo [] = [];
  delete: SingerInfo;
  title = 'Danh Sách Ca Sĩ Của Tôi';

  constructor(private singerManagerService: SingerManagerService) {
  }

  ngOnInit() {
    // const userId = sessionStorage.getItem('AuthUserId');
    this.singerManagerService.getAllSingerUserId()
      .subscribe(next => {
        this.listSinger = next.data;
        console.log(this.singerManagerService);
      }, error => {
        console.log(error);
      });
  }

  deleteSong(id: number) {
    this.singerManagerService
      .deleteSinger(id)
      .subscribe(
        data => {
          this.delete = data;
          window.location.reload();
        },
        error => {
          this.delete = null;
        }
      );
  }

}

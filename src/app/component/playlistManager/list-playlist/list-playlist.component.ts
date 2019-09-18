import {Component, OnInit} from '@angular/core';
import {PlaylistInfor} from "../../../model/playlist/playlist-Infor";
import {PlaylistService} from "../../../service/playlistManager/playlist.service";

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.scss']
})
export class ListPlaylistComponent implements OnInit {
  playlistInfors: PlaylistInfor [] = [];
  delete: PlaylistInfor;
  title = 'Danh Sách Playlist' ;

  constructor(private songplaylist: PlaylistService) {
  }

  ngOnInit() {
    this.songplaylist.getAllPlayListByUser()
      .subscribe(next => {
        this.playlistInfors = next.data;
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  deleteSong(id: number) {
    this.songplaylist
      .deletePlayList(id)
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

  editSong(id: number) {
  }
}

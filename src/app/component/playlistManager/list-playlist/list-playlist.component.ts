import { Component, OnInit } from '@angular/core';
import {PlaylistInfor} from "../../../model/playlist/playlist-Infor";
import {PlaylistService} from "../../../service/playlistManager/playlist.service";

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.scss']
})
export class ListPlaylistComponent implements OnInit {
  playlistInfors: PlaylistInfor [] = [];
  constructor(private songplaylist: PlaylistService) { }

  ngOnInit() {
    this.songplaylist.getPlayListAll()
      .subscribe(next => {
        this.playlistInfors = next;
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  editSong(id: number) {
  }

  deleteSong(id: number) {
  }

}

import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song/song";
import {SongService} from "../../../service/song/song.service";

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {
  songList: Song[] = [];
  constructor(private songService: SongService) { }
  delete: Song;
  ngOnInit() {
    this.songService.getSong()
      .subscribe(next => {
        this.songList = next;
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  editSong(id: number) {
  }

  deleteSong(id: number) {
    this.songService
      .deleteSong(id)
      .subscribe(
        data => {
          this.delete = data;
          window.location.reload(); },
        error => {this.delete = null; }
      );
  }
}

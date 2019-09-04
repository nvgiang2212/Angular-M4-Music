import { Component, OnInit } from '@angular/core';
import {Song} from "../../model/song/song";
import {SongService} from "../../service/song/song.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.scss']
})

export class DetailSongComponent implements OnInit {

  // ngOnInit(): void {
  // }
  //
  //
  // constructor() {
  // }

  song: Partial<Song> = {
      id: 0,
      nameSong: '',
      nameSinger: '',
      avatar: '',
      url: '',
      describes: ''
    };

  constructor(
    private songService: SongService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.songService.getSongById(id)
      .subscribe(
        next => {
          this.song = next.data;
          console.log(next.data);
        },
        error => {
          console.log(error);
          this.song = null;
        });
  }

}

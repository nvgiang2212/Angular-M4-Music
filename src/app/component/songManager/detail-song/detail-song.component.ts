import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song/song";
import {SongService} from "../../../service/song/song.service";
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.scss']
})

export class DetailSongComponent implements OnInit {

  song: Song = {
      id: 0,
      nameSong: '',
      nameSinger: '',
      avatarUrl: '',
      mp3Url: '',
      describes: ''
    };

  constructor(
    private songService: SongService,
    private route: Route,
    private router: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.router.snapshot.paramMap.get('id');
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

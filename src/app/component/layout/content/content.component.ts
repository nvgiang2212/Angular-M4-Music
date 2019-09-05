import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../service/userManager/token/token-storage.service';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../service/song/song.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  info: any;

  bestChoiceSong: Song[];
  songList: Song[] = [];
  bestSaleoffSong = this.bestChoiceSong;
  suggestionSong = this.bestChoiceSong;

  constructor(private token: TokenStorageService,
              private songService: SongService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.songService.getSong()
      .subscribe(next => {
        this.songList = next.data;
        console.log(next);
      });
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}

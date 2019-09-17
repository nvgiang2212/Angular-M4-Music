import {Component, OnInit} from '@angular/core';
import {Song} from "../../../model/song/song";
import {SongService} from "../../../service/song/song.service";
import {PlaylistService} from "../../../service/playlistManager/playlist.service";
import {PlaylistInfor} from "../../../model/playlist/playlist-Infor";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.scss']
})
export class AddsongComponent implements OnInit {

  songList: Song[] = [];
  playlist: PlaylistInfor;
  id: number;

  constructor(private songService: SongService,
              private playlistService: PlaylistService,
              private routes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.routes.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.playlistService.getPlayListById(this.id).subscribe(
        data => {
          this.playlist = data;
        },
        error => {
          this.playlist = null;
        }
      );
    });

    this.songService.getSong()
      .subscribe(next => {
        this.songList = next;
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  update(songs: Song[]) {
    this.songList = songs;
  }

  addSongtoPlayList(song: Song) {
    this.playlist.songs.push(song);
    const url = '/my-playlist/' + this.id;
    this.playlistService.updatePlayList(this.playlist).subscribe(next => {
      this.router.navigate([url]);
    });
  }

}

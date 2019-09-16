import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../../service/playlistManager/playlist.service";
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../../model/song/song";
import {PlaylistInfor} from "../../../model/playlist/playlist-Infor";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist: PlaylistInfor;

  constructor(private playlistService: PlaylistService,
              private routes: ActivatedRoute) {
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.playlistService.getPlayListById(id).subscribe(
        next => {
          this.playlist = next;
          console.log(next);
        },
        error => {
          this.playlist = null;
          console.log(error);
        }
      );
    });
  }

}

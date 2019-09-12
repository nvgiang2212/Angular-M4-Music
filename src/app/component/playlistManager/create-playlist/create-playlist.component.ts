import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/userManager/auth/auth.service';
import {FormControl, FormGroup} from "@angular/forms";
import {PlaylistInfor} from '../../../model/playlist/playlist-Infor';
import {PlaylistService} from '../../../service/playlistManager/playlist.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  playlistForm: FormGroup;
  playlist: Partial<PlaylistInfor>;
  constructor(private auth: AuthService,
              private router: Router,
              private playlistService: PlaylistService) {
    this.playlistForm = new FormGroup({
      playlistName : new FormControl('')
      });
    this.playlist = {
      playlistName: ''
    };
  }

  ngOnInit() {
  }
  createPlaylist() {
    console.log(this.playlist);
    this.playlistService.createPlaylist(this.playlist).subscribe(() => {
      this.router.navigate(['/list-playlist']);
    }, error => console.log(error));
  }

}

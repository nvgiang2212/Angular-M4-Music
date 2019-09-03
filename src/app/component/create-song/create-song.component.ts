import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Song} from "../../model/song/song";
import {Router} from "@angular/router";
import {SongService} from "../../service/song/song.service";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {

  songForm: FormGroup;
  song: Partial<Song>;

  constructor(private router: Router,
              private service: SongService) {
    this.songForm = new FormGroup({
      avatar: new FormControl(''),
      nameSong: new FormControl(''),
      nameSinger: new FormControl(''),
      url: new FormControl(''),
      describes: new FormControl('')
    });
    this.song = {
      avatar: '',
      nameSong: '',
      nameSinger: '',
      url: '',
      describes: ''
    };
  }

  ngOnInit() {
  }

  onChange($event) {
    this.song.url = $event;
  }
  onAvatar($event) {
    this.song.avatar = $event;
  }

  createSong() {
    console.log(this.song);
    this.service.createSong(this.song).subscribe(() => {
      this.router.navigate(['/home']);
    }, error => console.log(error) );
  }

}

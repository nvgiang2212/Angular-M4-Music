import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Song} from "../../model/song";
import {Router} from "@angular/router";
import {SongService} from "../../service/song.service";

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
      Describe: new FormControl('')
    });
    this.song = {
      avatar: '',
      nameSong: '',
      nameSinger: '',
      url: '',
      Describe: ''
    };
  }

  ngOnInit() {
  }

  onChange($event) {
    this.song.url = $event;
  }

  createSong() {
    console.log(this.song);
    this.service.createSong(this.song).subscribe(() => {
      this.router.navigate(['/home-for-host']);
    }, error => console.log(error) );
  }

}

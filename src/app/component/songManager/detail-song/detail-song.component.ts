import {Component, OnInit} from '@angular/core';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../service/song/song.service';
import {ActivatedRoute, Route} from '@angular/router';
import {TokenStorageService} from '../../../service/userManager/token/token-storage.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

// declare function playDock(): any;

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.scss']
})

export class DetailSongComponent implements OnInit {
  song: Song = {
    id: 0,
    nameSong: '',
    singer: '',
    avatarUrl: '',
    mp3Url: '',
    describes: ''
  };
  songInfor: Song[] = [];

  constructor(private token: TokenStorageService,
              private songService: SongService,
              private routes: ActivatedRoute,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.songService.getSong().subscribe(
      next => {
        this.songInfor = next;
      },
      error => {
        this.songInfor = [];
      },
    );

    const id = +this.routes.snapshot.paramMap.get('id');
    this.songService.getSongById(id).subscribe(
      next => {
        this.song = next;
      },
      error => {
        this.song = null;
      }
    );
    // playDock();
  }

  open(content) {
    this.modalService.open(content);
  }
}

import {Component, OnInit} from '@angular/core';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../service/song/song.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../../service/userManager/token/token-storage.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

declare function playDock(): any;

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.scss']
})

export class DetailSongComponent implements OnInit {
  song: Song;
  songInfor: Song[] = [];

  constructor(private token: TokenStorageService,
              private songService: SongService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.songService.getSong().subscribe(
      data => {
        this.songInfor = data;
      },
      error => {
        this.songInfor = [];
      },
    );

    const id = +this.route.snapshot.paramMap.get('id');
    this.songService.getSongById(id).subscribe(
      next => {
        this.song = next;
      },
      error => {
        this.song = null;
      }
    );
    playDock();
  }

  open(content) {
    this.modalService.open(content);
  }
}

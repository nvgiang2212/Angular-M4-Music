import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../service/song/song.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  songs: Song[];
  name: string[] = [];
  searchForm: FormGroup;
  filteredSong: Song[];
  @Output()
  press = new EventEmitter<Song[]>();


  constructor(private songService: SongService) {
    this.searchForm = new FormGroup({
      nameSong: new FormControl(''),
      // singer: new FormControl('')
    });
  }

  ngOnInit() {
    this.songService.getSong()
      .subscribe(next => {
        this.songs = next;
        this.name = this.name.filter((value, i, self) => self.indexOf(value) === i);
        console.log(this.name);
      });
  }

  filter() {
    if (this.searchForm.valid) {
      const form = this.searchForm.value;
      const isEmptyForm = !form.nameSong;
      this.filteredSong = this.songs;
      if (!isEmptyForm) {
        if (form.nameSong) {
          this.filteredSong = this.filteredSong.filter((song => song.nameSong.includes(form.nameSong)));
        }
      } else {
        this.filteredSong = this.songs;
      }
      this.press.emit(this.filteredSong);
    }
  }

  unFilter() {
    location.reload();
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SongService} from '../../../service/song/song.service';
import {SingerInfo} from '../../../model/singer/singer-info';
import {SingerManagerService} from '../../../service/singerManager/singer-manager.service';

@Component({
  selector: 'app-create-singer',
  templateUrl: './create-singer.component.html',
  styleUrls: ['./create-singer.component.scss']
})
export class CreateSingerComponent implements OnInit {
  title = 'Thêm Ca Sĩ';

  singerForm: FormGroup;
  singer: Partial<SingerInfo>;

  constructor(
    private router: Router,
    private singerManagerService: SingerManagerService) {
    this.singerForm = new FormGroup({
      singerName: new FormControl(''),
      singerAvatar: new FormControl(''),
      singerBirthday: new FormControl(''),
      singerNation: new FormControl(''),
      description: new FormControl(''),
    });
    this.singer = {
      singerName: '',
      singerAvatar: '',
      singerBirthday: '',
      singerNation: '',
      description: '',
    };
  }

  ngOnInit() {
  }

  onAvatar($event) {
    this.singer.singerAvatar = $event;
  }

  createSinger() {
    console.log(this.singer);
    this.singerManagerService.createSinger(this.singer).subscribe(() => {
      this.router.navigate(['/home']);
    }, error => console.log(error));
  }

}

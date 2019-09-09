import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/userManager/auth/auth.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}

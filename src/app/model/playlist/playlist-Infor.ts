import {Song} from '../song/song';
import {SignUpInfo} from '../userManager/Signup-Infor';

export class PlaylistInfor {
  id: number;
  playlistName: string;
  songs: Song[];
  users: SignUpInfo[];

  constructor(id: number, playlistName: string, songs: Song[], users: SignUpInfo[]) {
    this.id = id;
    this.playlistName = playlistName;
    this.songs = songs;
    this.users = users;
  }
}

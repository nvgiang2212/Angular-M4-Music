import {Song} from '../song/song';

export class SingerInfo {
  id: number;
  singerName: string;
  singerAvatar: string;
  singerBirthday: number;
  singerNation: string;
  description: string;
  songs: Song[];

  // tslint:disable-next-line:max-line-length
  constructor(id: number, singerName: string, singerAvatar: string, singerBirthday: number, singerNation: string, description: string, songs: Song[]) {
    this.id = id;
    this.singerName = singerName;
    this.singerAvatar = singerAvatar;
    this.singerBirthday = singerBirthday;
    this.singerNation = singerNation;
    this.description = description;
    this.songs = songs;
  }
}

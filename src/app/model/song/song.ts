export class Song {
  id: number;
  avatarUrl: string;
  nameSong: string;
  singer: string;
  mp3Url: string;
  describes: string;


  constructor(id: number, avatarUrl: string, nameSong: string, singer: string, mp3Url: string, describes: string) {
    this.id = id;
    this.avatarUrl = avatarUrl;
    this.nameSong = nameSong;
    this.singer = singer;
    this.mp3Url = mp3Url;
    this.describes = describes;
  }
}

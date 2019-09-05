export class Song {
  id: number;
  avatarUrl: string;
  nameSong: string;
  nameSinger: string;
  mp3Url: string;
  describes: string;


  constructor(id: number, avatarUrl: string, nameSong: string, nameSinger: string, mp3Url: string, describes: string) {
    this.id = id;
    this.avatarUrl = avatarUrl;
    this.nameSong = nameSong;
    this.nameSinger = nameSinger;
    this.mp3Url = mp3Url;
    this.describes = describes;
  }
}

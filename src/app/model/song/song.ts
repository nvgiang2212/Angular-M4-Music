export class Song {
  id: number;
  avatar: string;
  nameSong: string;
  nameSinger: string;
  url: string;
  describes: string;


  constructor(id: number, avatar: string, nameSong: string, nameSinger: string, url: string, describes: string) {
    this.id = id;
    this.avatar = avatar;
    this.nameSong = nameSong;
    this.nameSinger = nameSinger;
    this.url = url;
    this.describes = describes;
  }
}

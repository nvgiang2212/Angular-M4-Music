export class SingerInfo {
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

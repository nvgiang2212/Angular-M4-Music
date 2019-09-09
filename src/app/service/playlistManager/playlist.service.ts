import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';
import {PlaylistInfor} from '../../model/playlist/playlist-Infor';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistUrl = 'http://localhost:8080/api/playlist';

  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient) {
  }

  // METHOD CHO BACKEND
  createPlaylist(playlist: PlaylistInfor): Observable<PlaylistInfor> {
    return this.http.post<PlaylistInfor>(this.playlistUrl, playlist);
  }

  getPlayListAll(): Observable<PlaylistInfor[]> {
    return this.http.get<PlaylistInfor[]>(this.playlistUrl);
  }

  getPlayListById(id: number): Observable<PlaylistInfor> {
    return this.http.get<PlaylistInfor>(`${this.playlistUrl}/${id}`);
  }

  updatePlayList(playlist: PlaylistInfor): Observable<PlaylistInfor> {
    return this.http.patch<PlaylistInfor>(`${this.playlistUrl}/${playlist.id}`, playlist);
  }

  deletePlayList(id: number): Observable<PlaylistInfor> {
    return this.http.delete<PlaylistInfor>(`${this.playlistUrl}/${id}`);
  }
}

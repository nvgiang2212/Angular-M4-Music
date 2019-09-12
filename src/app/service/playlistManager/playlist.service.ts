import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';
import {PlaylistInfor} from '../../model/playlist/playlist-Infor';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistUrl = 'http://localhost:8080/api/playlist';
  private readonly API_URL_CREATE = environment.URL + '/api/playlist/create';


  constructor(
    private http: HttpClient) {
  }

  // METHOD CHO BACKEND
  createPlaylist(playlist: Partial<PlaylistInfor>): Observable<any> {
    return this.http.post<any>(this.API_URL_CREATE, playlist);
  }

  getPlayListAll(): Observable<PlaylistInfor[]> {
    return this.http.get<PlaylistInfor[]>(this.playlistUrl);
  }

  getPlayListById(id: number): Observable<PlaylistInfor> {
    return this.http.get<PlaylistInfor>(`${this.playlistUrl}/${id}`);
  }

  updatePlayList(playlist: PlaylistInfor): Observable<PlaylistInfor> {
    return this.http.put<PlaylistInfor>(`${this.playlistUrl}/${playlist.id}`, playlist);
  }

  deletePlayList(id: number): Observable<PlaylistInfor> {
    return this.http.delete<PlaylistInfor>(`${this.playlistUrl}/${id}`);
  }
}

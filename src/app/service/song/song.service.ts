import {Injectable} from '@angular/core';
import {Song} from '../../model/song/song';
import {Observable} from 'rxjs';
import {AuthService} from '../userManager/auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SongService {
  // private getSongUrl = 'http://localhost:8080/api/songs';
  // private createSongUrl = 'http://localhost:8080/api/songs/create';
  // private getSongByIdUrl = 'http://localhost:8080/api/songs';
  // private updateSongByIdUrl = 'http://localhost:8080/api/songs';
  // private deleteSongByIdUrl = 'http://localhost:8080/api/songs/by';

  songs: Song[];
  private readonly API_URL = environment.URL + '/api/songs/create';
  private readonly API_URL_GET = environment.URL + '/api/songs';
  private readonly API_URL_GET_ID = environment.URL + '/api/songs';
  // private readonly API = 'http://localhost:8080/api/songs';

  getSong(): Observable<any> {
    return this.http.get<any>(this.API_URL_GET);
  }

  getSongById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL_GET_ID}/${id}`);
  }

  createSong(song: Partial<Song>): Observable<Song> {
    return this.http.post<Song>(this.API_URL, song);
  }

  updateSong(songs: Song): Observable<Song> {
    return this.http.put<Song>(`${this.API_URL}/${songs.id}`, songs);
  }

  deleteSong(id: number): Observable<Song> {
    return this.http.delete<Song>(`${this.API_URL}/${id}`);
  }

  constructor(private http: HttpClient, private authenService: AuthService) {
  }
}

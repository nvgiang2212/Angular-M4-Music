import {Injectable} from '@angular/core';
import {Song} from '../../model/song/song';
import {Observable} from 'rxjs';
import {AuthService} from '../userManager/auth.service';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SongService {
  private getSongUrl = 'http://localhost:8080/api/songs';
  private createSongUrl = 'http://localhost:8080/api/songs/create';
  private getSongByIdUrl = 'http://localhost:8080/api/songs';
  private updateSongByIdUrl = 'http://localhost:8080/api/songs';
  private deleteSongByIdUrl = 'http://localhost:8080/api/songs/by';

  songs: Song[];
  private readonly API_URL = 'http://localhost:8080/api';

  // Xu ly service cho back-end
  getSong(): Observable<Song[]> {
    return this.http.get<Song[]>(this.API_URL, {
        // headers: this.authenService.header
      }
    );
  }

  getSongById(id: number): Observable<Song> {
    return this.http.get<Song>(`${this.API_URL}/${id}`,
      {
        // headers: this.authenService.header
      });
  }

  createSong(song: Partial<Song>): Observable<Song> {
    return this.http.post<Song>(this.API_URL, song,
      {
        // headers: this.authenService.header
      });
  }

  updateSong(songs: Song): Observable<Song> {
    return this.http.put<Song>(`${this.API_URL}/${songs.id}`, songs,
      {
        // headers: this.authenService.header
      });
  }

  deleteSong(id: number): Observable<Song> {
    return this.http.delete<Song>(`${this.API_URL}/${id}`,
      {
        // headers: this.authenService.header
      });
  }

  constructor(private http: HttpClient, private authenService: AuthService) {
  }
}

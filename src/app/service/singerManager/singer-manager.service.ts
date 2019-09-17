import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../userManager/auth/auth.service';
import {Observable} from 'rxjs';
import {SingerInfo} from '../../model/singer/singer-info';

@Injectable({
  providedIn: 'root'
})
export class SingerManagerService {
  private readonly API_CREATE_SINGER = environment.URL + '/api/singers/create';
  private readonly API_GET_SINGER = environment.URL + '/api/singers';
  private readonly API_GET_SINGER_ID = environment.URL + '/api/singers';
  private readonly API_PUT_SINGER = environment.URL + '/api/singers/update';
  private readonly API_DELETE_SINGER = environment.URL + '/api/singers/delete';

  constructor(
    private http: HttpClient,
    private authenService: AuthService) {
  }

  getSinger(): Observable<any> {
    return this.http.get<any>(this.API_GET_SINGER);
  }

  getSingerById(id: number): Observable<SingerInfo> {
    return this.http.get<SingerInfo>(`${this.API_GET_SINGER_ID}/${id}`);
  }

}

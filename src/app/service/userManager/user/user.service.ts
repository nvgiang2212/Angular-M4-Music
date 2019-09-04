import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';
import {SignUpInfo} from '../../../model/userManager/Signup-Infor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userUrl = 'http://localhost:8080/user';
  // private pmUrl = 'http://localhost:8080/pm';
  // private adminUrl = 'http://localhost:8080/admin';
  private readonly API_URL = environment.URL + '/api/auth';


  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<SignUpInfo[]> {
    return this.http.get<SignUpInfo[]>(this.API_URL  + '/signup');
  }

  // getPMBoard(): Observable<string> {
  //   return this.http.get(this.pmUrl, { responseType: 'text' });
  // }
  //
  // getAdminBoard(): Observable<string> {
  //   return this.http.get(this.adminUrl, { responseType: 'text' });
  // }
}

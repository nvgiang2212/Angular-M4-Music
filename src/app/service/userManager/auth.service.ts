import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtResponse} from '../../model/jwt-response';
import {SignUpInfo} from '../../model/userManager/Signup-Infor';
import {AuthLoginInfo} from '../../model/userManager/Login-Infor';
import {environment} from "../../../environments/environment";


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.URL + '/api/signin';

  constructor(private httpClient: HttpClient) {
  }

  // ko can phai su dung JSON.stringigy de convert tu oject sang json
  authenticate(user): Observable<any> {
    return this.httpClient.get<any>(this.API_URL, user);
  }

  isLoggedIn() {
    const username = localStorage.getItem('currentUser');
    return !(username === null);
  }

  logout() {
    localStorage.clear();
  }
}

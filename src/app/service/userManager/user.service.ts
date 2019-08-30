import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Iuser} from "../../model/iuser";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userUrl = 'http://localhost:8080/user';
  // private pmUrl = 'http://localhost:8080/pm';
  // private adminUrl = 'http://localhost:8080/admin';
  private readonly API_URL = environment.URL + '/api/auth';


  constructor(private http: HttpClient) { }

  register(user: Partial<Iuser>): Observable<Iuser> {
    return this.http.post<Iuser>(this.API_URL + '/signup', user);
  }

  getUserBoard(name: string): Observable<string> {
    return this.http.get(this.API_URL, { responseType: 'text' });
  }

  // getPMBoard(): Observable<string> {
  //   return this.http.get(this.pmUrl, { responseType: 'text' });
  // }
  //
  // getAdminBoard(): Observable<string> {
  //   return this.http.get(this.adminUrl, { responseType: 'text' });
  // }
}

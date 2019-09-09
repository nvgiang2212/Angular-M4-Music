import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtResponse} from '../../../model/jwt-response';
import {SignUpInfo} from '../../../model/userManager/Signup-Infor';
import {AuthLoginInfo} from '../../../model/userManager/Login-Infor';
import {UpdateInfo} from "../../../model/userManager/UpdateInfo";
import {ChangePassword} from "../../../model/userManager/ChangePassword";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/login';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private updateProfileUrl = 'http://localhost:8080/api/auth/updateuser';
  private changePassUrl = 'http://localhost:8080/api/auth/changePassword';

  constructor(private http: HttpClient) {
  }

  loginAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUpAuth(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  updateAuth(info: UpdateInfo): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.updateProfileUrl, info, httpOptions);
  }

  changePasswordAuth(info: ChangePassword): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.changePassUrl, info, httpOptions);
  }
}

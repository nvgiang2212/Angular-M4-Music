import {Component, OnInit} from '@angular/core';
import {AuthLoginInfo} from '../../model/userManager/Login-Infor';
import {TokenStorageService} from '../../service/userManager/token-storage.service';
import {AuthService} from '../../service/userManager/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  login() {
    console.log(JSON.stringify(this.loginForm.value));
    console.log(this.loginForm.value);
    this.authenService.authenticate(this.loginForm.value).subscribe(
      next => {
        localStorage.setItem('token', next.data.token);
        localStorage.setItem('currentUser', next.data.username);
        if (next.data.token) {
          this.router.navigateByUrl('/home-for-host');
        }
      },
      error1 => {
        this.router.navigateByUrl('/login');
        console.log(error1);
      });
  }
}


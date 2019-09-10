import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/userManager/auth/auth.service';
import {UserService} from '../../../service/userManager/user/user.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {SignUpInfo} from '../../../model/userManager/Signup-Infor';
import {FileUpload} from '../../../model/song/fileUpload';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  form: any = {};
  registerForm: SignUpInfo;
  isRegister = false;
  isRegisterFail = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  // selectAvatar(event) {
  //
  //   this.selectedFiles = event.target.files;
  //   console.log(this.selectedFiles);
  // }

  // upload() {
  //   const file = this.selectedFiles.item(0);
  //   this.selectedFiles = undefined;
  //
  //   this.currentFileUpload = new FileUpload(file);
  //   this.userService.pushAvatarToStorage(this.currentFileUpload);
  //   console.log(this.currentFileUpload);
  // }

  RegisterAccount() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.registerForm = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.currentFileUpload.url
    );

    this.authService
      .signUpAuth(this.registerForm)
      .subscribe(
        data => {
          console.log(data);
          this.isRegister = true;
          this.isRegisterFail = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isRegisterFail = true;
        });
  }
}

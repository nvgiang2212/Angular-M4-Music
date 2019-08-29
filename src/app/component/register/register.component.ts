import {Component, OnInit} from '@angular/core';
import {SignUpInfo} from '../../model/userManager/Signup-Infor';
import {AuthService} from '../../service/userManager/auth.service';
import {Iuser} from "../../model/iuser";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/userManager/user.service";

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: Partial<Iuser>;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['']
      }, {validator: comparePassword}),
      name: ['', Validators.required],
      username: ['', Validators.required],
    });

    this.user = {
      username: '',
      password: '',
      role: [''],
      name: 'tinh' + Math.random() * 1000,
      email: 'tinh' + Math.random() * 1000 + '@gmai.com',
    };
  }

  onSubmit() {
    // if (this.registerForm.invalid) {
    //   return;
    // }
    console.log(this.registerForm.value);
    this.userService.register(this.user)
      .subscribe(
        data => {
          console.log('succsess');
          this.router.navigateByUrl('/signup');
        },
        error => {
          console.log('error');
        }
      );
  }
}

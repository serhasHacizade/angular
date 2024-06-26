import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private fb: FormBuilder, public userService: UserService) {

  };

  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],

  });

  get f(): {[key: string]: AbstractControl} {
    return this.loginForm.controls;
  };

  login() {
    this.userService.getUser(this.loginForm.value.email!).subscribe((res) => {
      console.log(res);
      
    })
  }
}

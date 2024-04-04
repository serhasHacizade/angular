import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  constructor(private fb: FormBuilder) {

  }
  createUserForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    username: ["", [Validators.required, Validators.maxLength(10)]],
    password: ["", [Validators.required, Validators.minLength(8)]],
  });

  get f(): {[key: string]: AbstractControl} {
    return this.createUserForm.controls;
  }
}

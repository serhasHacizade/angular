import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  createUserForm!: FormGroup
  // createUserForm = new FormGroup({
  //   firstName: new FormControl(null, [Validators.required]),
  //   lastName: new FormControl(null, [Validators.required]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //   confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //   address: new FormControl(null, [Validators.required]),
  // });

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8)]],
      address: ["", [Validators.required]]
    }, {
      validators: this.matchingPasswords("password", "confirmPassword")
    });
  }

  matchingPasswords(Password: string, ConfirmPassword: string) {
    return (controls: AbstractControl) => {
      if (controls) {
        const Password = controls.get("password")!.value;
        const ConfirmPassword = controls.get("confirmPassword")!.value;
        if (Password !== ConfirmPassword) {
          controls.get("confirmPassword")?.setErrors({ not_the_same: true });
          return { mismatchedPassword: true }
        }
      }
      return null;
    }
  }
}

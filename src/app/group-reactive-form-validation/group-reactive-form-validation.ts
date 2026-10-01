import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule ,NgIf],
  selector: 'app-group-reactive-form-validation',
  styleUrl: './group-reactive-form-validation.css',
  templateUrl: './group-reactive-form-validation.html',
})
export class GroupReactiveFormValidation {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/)]),
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

  get name() {
    return this.loginForm.controls['name'];
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
}

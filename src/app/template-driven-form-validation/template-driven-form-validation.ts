import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule,NgIf],
  selector: 'app-template-driven-form-validation',
  styleUrl: './template-driven-form-validation.css',
  templateUrl: './template-driven-form-validation.html',
})
export class TemplateDrivenFormValidation {
  showUserDetails = {
    name: '',
    email: '',
    gender: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    console.log('Form submitted', form.value);
    this.showUserDetails = form.value;
  }
}

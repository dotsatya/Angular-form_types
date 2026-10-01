import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-template-driven-form',
  styleUrl: './template-driven-form.css',
  templateUrl: './template-driven-form.html',
})
export class TemplateDrivenForm {
  showUserDetails = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    console.log('Form submitted', form.value);
    this.showUserDetails = form.value;
  }
}

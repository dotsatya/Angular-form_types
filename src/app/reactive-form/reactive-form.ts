import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  onSubmit(event: Event) {
    //for button type submit , use $event //// //// for type button don't need $event
    event.preventDefault(); //to prevent default behaviour
    console.log(this.name.value);
    console.log(this.email.value);
    console.log(this.password.value);
  }
  
  setValue() {
    this.name.setValue('test');
    this.email.setValue('test@test');
    this.password.setValue('passtest');
  }
}

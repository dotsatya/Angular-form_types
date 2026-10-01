import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ ReactiveFormsModule],
  selector: 'app-group-reactive-form',
  styleUrl: './group-reactive-form.css',
  templateUrl: './group-reactive-form.html',
})
export class GroupReactiveForm {
  //form group is a collection of form controls
  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    //1. for /button type submit/ - use $event
    //2. for /button type button/ - don't need $event
    //3. for /form type submit and  (ngSubmit)="onSubmit()"/ - use to prevent default behaviour
    // event.preventDefault(); //to prevent reload
    console.log(this.loginForm.value);
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveForm } from './reactive-form/reactive-form';
import { GroupReactiveForm } from './group-reactive-form/group-reactive-form';
import { GroupReactiveFormValidation } from './group-reactive-form-validation/group-reactive-form-validation';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { TemplateDrivenFormValidation } from './template-driven-form-validation/template-driven-form-validation';

@Component({
  imports: [
    RouterOutlet,
    ReactiveForm, // normal reactive form
    GroupReactiveForm, // group reactive form
    GroupReactiveFormValidation, // group reactive form with validation
    TemplateDrivenForm, // template driven form for basic use case
    TemplateDrivenFormValidation, // template driven form with validation
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_form_types');
}

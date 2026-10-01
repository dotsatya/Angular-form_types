# Angular Form Types

This project is a practical Angular demo that shows the main ways to build and validate forms in Angular.

## Overview

The app includes multiple examples of form handling patterns:

- Reactive form with standalone `FormControl` instances
- Reactive form grouped inside a `FormGroup`
- Reactive form with validation rules
- Template-driven form using `ngModel` and `NgForm`
- Template-driven form with validation feedback

The examples are organized under the `src/app` folder and are intended to help compare the differences between Angular form techniques.

## Included form examples

### 1. Reactive form
Location: `src/app/reactive-form/`

- Uses `FormControl` for each field
- Shows how to read values and set values programmatically
- Good for logic-driven form state

### 2. Group reactive form
Location: `src/app/group-reactive-form/`

- Uses `FormGroup` to wrap multiple controls
- Demonstrates grouped form data with `formControlName`
- Useful when a form logically belongs to one model

### 3. Group reactive form with validation
Location: `src/app/group-reactive-form-validation/`

- Adds validators like `required`, `minLength`, `email`, and `pattern`
- Displays error messages when fields are invalid
- Shows how to handle `dirty` and `touched` states

### 4. Template-driven form
Location: `src/app/template-driven-form/`

- Uses `ngModel` and `NgForm`
- Collects form values on submit
- Easier for simpler forms and quick form creation

### 5. Template-driven form with validation
Location: `src/app/template-driven-form-validation/`

- Adds validation attributes such as `required`, `minlength`, and `email`
- Shows inline validation messages
- Includes a password pattern example and submit button disabling

## Run the project

Install dependencies:

```bash
npm install
```

Start the app:

```bash
ng serve
```

Then open:

```text
http://localhost:4200/
```

## Switch between examples

The main app imports each form component in `src/app/app.ts`, and the currently shown demo is selected from `src/app/app.html`.

If you want to preview a different example, uncomment the matching component tag in `src/app/app.html`.

Example:

```html
<app-reactive-form></app-reactive-form>
```

## Notes

This project is designed as a learning reference for Angular forms, especially for comparing:

- reactive vs template-driven approaches
- grouped vs standalone controls
- validation patterns in Angular
- form submission and value handling

## Technology

- Angular
- Angular Forms
- TypeScript
- Angular CLI

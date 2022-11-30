// utils/custom-validator.ts

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  // Validation with no params
  static noPepito(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value === 'Pepito') {
      return { noPepito: true }; // trigger error
    }
    return null; // valid response
  }

  // Validation with params
  static validAge(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value > max || control.value < min) {
        return { validAge: true }; // trigger error
      }
      return null; // valid response
    };
  }
}

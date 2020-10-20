import { AbstractControl } from '@angular/forms';

export const creditCardValidator = (control: AbstractControl) => {
  if (control.value && control.value.length === 19) {
    return null;
  }
  return { creditCard: 'format error' };
};

export const repeatPasswordValidator = (
  compareFieldA: string,
  compareFieldB: string
) => (control: AbstractControl) => {
  // 這裡的 control 是 formGroup
  if (control.get(compareFieldA).value !== control.get(compareFieldB).value) {
    return { repeatPassword: true };
  }
  return null;
};

// function repeatPasswordValidator(compareField: string) {
//   return function validate(control: AbstractControl) {
//     return null;
//   };
// }

import { creditCardValidator } from './custom-validators';
import { Directive } from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  AbstractControl,
} from '@angular/forms';

@Directive({
  selector: '[appCreditCardValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CreditCardValidatorDirective, multi: true },
  ],
})
export class CreditCardValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
    // 使用原本寫好的 creditCardValidator
    return creditCardValidator(control);
  }
}

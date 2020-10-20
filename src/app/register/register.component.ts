import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const creditCardValidator = (control: AbstractControl) => {
  if (control.value && control.value.length === 19) {
    return null;
  }
  return { creditCard: 'format error' };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstNameControl = this.formBuilder.control('Mike', [
    Validators.required,
    Validators.minLength(4),
  ]);
  lastNameControl = this.formBuilder.control('Huang', [
    Validators.required,
    Validators.minLength(4),
  ]);
  emailControl = this.formBuilder.control('', [
    Validators.required,
    Validators.email,
  ]);
  creditCardControl = this.formBuilder.control('', [creditCardValidator]);

  form = this.formBuilder.group({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    creditCard: this.creditCardControl,
    passwordGroup: this.formBuilder.group({
      password: '',
      repeatPassword: '',
    }),
    interests: this.formBuilder.array([
      this.formBuilder.control('HTML'),
      this.formBuilder.control('JavaScript'),
      this.formBuilder.control('Angular'),
    ]),
  });

  // form2 = this.formBuilder.group({
  //   firstName: this.formBuilder.control('Mike', [Validators.required, Validators.minLength(4)])
  // });

  // form3 = new FormGroup({
  //   firstName: new FormControl(),
  //   interests: new FormArray([
  //     new FormControl('HTML')
  //   ])
  // });

  get interests() {
    return this.form.get('interests') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // api ....
    let data = {
      firstName: 'Mike 2',
      lastName: 'Huang 2',
      email: 'test@demo.com',
      interests: ['A', 'B', 'C'],
      creditCard: '',
    };

    data['passwordGroup'] = {
      password: '',
      repeatPassword: '',
    };
    this.form.setValue(data);
    this.form.reset({ lastName: '123' });
    this.form.patchValue({ firstName: 'ABC', AAAA: 'test' });
    this.form.get('email').reset('aaa@bbb.com');
    const repeatPassword = this.form.get('passwordGroup.repeatPassword');
    // const repeatPassword = this.form.get('passwordGroup').get('repeatPassword');
  }

  register() {
    console.log(this.form.value);
  }

  addInterest() {
    this.interests.push(this.formBuilder.control(''));
  }

  removeInterest(index: number) {
    this.interests.removeAt(index);
  }
}

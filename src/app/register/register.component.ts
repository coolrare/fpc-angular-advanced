import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = this.formBuilder.group({
    firstName: 'Mike',
    lastName: 'Huang',
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
  //   firstName: this.formBuilder.control('Mike')
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

  ngOnInit(): void {}

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

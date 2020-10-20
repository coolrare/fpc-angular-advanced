import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  });

  // form2 = this.formBuilder.group({
  //   firstName: this.formBuilder.control('Mike')
  // });

  // form3 = new FormGroup({
  //   firstName: new FormControl()
  // });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  register() {
    console.log(this.form.value);
  }
}

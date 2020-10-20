import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('tEmail') emailControl: NgModel;


  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.emailControl.valueChanges.subscribe((data) => {
      console.log('email value changes', data);
    });

    this.emailControl.statusChanges.subscribe((status) => {
      console.log('email status changes', status);
    });
  }

  login(user: { email: string; password: string }) {
    // if (user.email === 'mike@demo.com' && user.password === '1234') {
    //   localStorage.setItem('apiKey', 'xxxx');
    //   this.router.navigateByUrl('/');
    // } else {
    //   alert('wrong');
    // }
  }

  emailChange(event) {
    // console.log(event);
  }

  formLogin(event){
    console.log(event);
  }
}

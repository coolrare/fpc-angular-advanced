import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(user: { email: string, password: string}) {
    if (user.email === 'mike@demo.com' && user.password === '1234') {
      localStorage.setItem('apiKey', 'xxxx');
      this.router.navigateByUrl('/');
    } else {
      alert('wrong');
    }
  }

}

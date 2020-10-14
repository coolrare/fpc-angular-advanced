import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(num: number) {
    return this.httpClient
        .get<User[]>('http://www.mocky.io/v2/5c9e523f3000005500ee97cf');
  }
}

import { User } from './../user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  data: User[];
  num: number;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      console.log(queryParamMap.get('num'));
      this.num = +queryParamMap.get('num');
      this.httpClient
        .get<User[]>('http://www.mocky.io/v2/5c9e523f3000005500ee97cf')
        .subscribe((data) => {
          console.log(data);
          this.data = data;
        });
    });
  }
}

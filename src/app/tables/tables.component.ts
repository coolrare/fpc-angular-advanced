import { UserService } from './../user.service';
import { User } from './../user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit, OnDestroy {
  data: User[];
  num: number;
  subs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      console.log(queryParamMap.get('num'));
      this.num = +queryParamMap.get('num');

      this.userService.getUsers(this.num).subscribe((data) => {
        console.log(data);
        this.data = data;
      });
    });

    // 單獨取得 num 資料
    // this.route.queryParamMap.subscribe((queryParamMap) => {
    //   console.log(queryParamMap.get('num'));
    //   this.num = +queryParamMap.get('num');
    // });

    // 搭配 switchMap 取資料
    // this.route.queryParamMap
    //   .pipe(
    //     switchMap((queryParamMap) =>
    //       this.userService.getUsers(+queryParamMap.get('num'))
    //     )
    //   )
    //   .subscribe((data) => {
    //     this.data = data;
    //   });

    // 搭配 map 及 switchMap 取資料
    // this.route.queryParamMap
    //   .pipe(
    //     map((queryParamMap) => +queryParamMap.get('num')),
    //     switchMap((num) => this.userService.getUsers(num))
    //   )
    //   .subscribe((data) => {
    //     this.data = data;
    //   });

    // 自定義不會結束的 Observable 需要取消訂閱
    // this.subs = interval(3000)
    //   .pipe(switchMap((val) => this.userService.getUsers(val)))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  ngOnDestroy() {
    // this.subs.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

  goCharts() {
    this.router.navigateByUrl('/charts');
  }

  goColors(id: number) {
    this.router.navigate(['/utilities/colors', id]);
  }

  goTables() {
    // this.router.navigateByUrl(`/tables?num=${15}`);
    this.router
      .navigate(
        ['/tables'],
        { queryParams: { num: 15 } }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  type: number;

  constructor(private route: ActivatedRoute) {
    console.log('colors component');
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('type'));

    this.route.paramMap.subscribe((paramMap) => {
      console.log(paramMap.get('type'));
      this.type = +paramMap.get('type');
    });
  }
}

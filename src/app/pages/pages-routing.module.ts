import { BlankComponent } from './blank/blank.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  // 不透過 PagesComponent 直接顯示元件
  // { path: 'blank', component: BlankComponent },
  // 透過 PagesComponent 的 router-outlet 顯示子路由
  {
    path: '',
    component: PagesComponent,
    children: [{ path: 'blank', component: BlankComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

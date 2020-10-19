import { AuthGuard } from './auth.guard';
import { ColorsComponent } from './colors/colors.component';
import { AnimationsComponent } from './animations/animations.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ButtonComponent } from './button/button.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      // {
      //   path: '',
      //   component: DashboardComponent
      // },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
      {
        path: 'button',
        component: ButtonComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'utilities',
        children: [
          {
            path: 'animations',
            component: AnimationsComponent,
          },
          {
            path: 'colors',
            component: ColorsComponent,
          },
          {
            path: 'colors/:type',
            component: ColorsComponent,
          },
        ],
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent
      // }
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

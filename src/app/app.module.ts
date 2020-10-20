import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { AnimationsComponent } from './animations/animations.component';
import { ColorsComponent } from './colors/colors.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { CreditCardValidatorDirective } from './credit-card-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DashboardComponent,
    LayoutComponent,
    LoginComponent,
    ButtonComponent,
    NotFoundComponent,
    ChartsComponent,
    TablesComponent,
    AnimationsComponent,
    ColorsComponent,
    RegisterComponent,
    CreditCardValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './common-module/login/login.component';
import { ForgetPasswordComponent } from './common-module/forget-password/forget-password.component';
import { RegisterAsComponent } from './common-module/register-as/register-as.component';
import { StudentResgistrationComponent } from './common-module/student-resgistration/student-resgistration.component';
import { HeaderComponent } from './common-module/header/header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RegisterAsComponent,
    StudentResgistrationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

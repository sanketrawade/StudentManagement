import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModuleRoutingModule } from './common-module-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterAsComponent } from './register-as/register-as.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { StudentResgistrationComponent } from './student-resgistration/student-resgistration.component';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';



@NgModule({
  declarations: [LoginComponent, RegisterAsComponent, ForgetPasswordComponent, StudentResgistrationComponent, HeaderComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CommonModuleRoutingModule,
    TabsModule.forRoot()
  ]
})
export class CommonModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterAsComponent } from './register-as/register-as.component';
import { StudentResgistrationComponent } from './student-resgistration/student-resgistration.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';


@NgModule({
  declarations: [ForgetPasswordComponent,HeaderComponent,LoginComponent,RegisterAsComponent,StudentResgistrationComponent,TeacherRegistrationComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }

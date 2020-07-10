import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAsComponent } from './register-as/register-as.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { StudentResgistrationComponent } from './student-resgistration/student-resgistration.component';


const routes: Routes =
[
  {
    path:'ForgetPassword',
    component:ForgetPasswordComponent
  },
  {
    path:'RegisterAs',
    component:RegisterAsComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Register-Stduent',
    component:StudentResgistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonModuleRoutingModule { }

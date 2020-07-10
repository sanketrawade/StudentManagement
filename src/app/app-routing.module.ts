import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './common-module/login/login.component';
import { ForgetPasswordComponent } from './common-module/forget-password/forget-password.component';
import { RegisterAsComponent } from './common-module/register-as/register-as.component';
import { StudentResgistrationComponent } from './common-module/student-resgistration/student-resgistration.component';


const routes: Routes = [
{
  path:'',
  redirectTo:'/Login',
  pathMatch:'full'
},
{
  path:'Login',
  component:LoginComponent
},
{
  path:'ForgetPassword',
  component:ForgetPasswordComponent
},
{
  path:'RegisterAs',
  component:RegisterAsComponent
},
{
  path:'Register-Stduent',
  component:StudentResgistrationComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }

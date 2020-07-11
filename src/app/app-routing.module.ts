import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const routes: Routes = [
{
  path:'',
  redirectTo:'/ogin',
  pathMatch:'full'
},
{
  path:'login',
  loadChildren:'./core/core.module#CoreModule'
},
{
  path:'Student',
  loadChildren:'./student/student.module#StudentModule'
},
{
  path:'Teacher',
  loadChildren:'./teacher/teacher.module#TeacherModule'
},
{
  path:'Admin',
  loadChildren:'./admin/admin.module#AdminModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

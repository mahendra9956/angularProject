import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './LoginDetails/login/forget-password/forget-password.component';
import { LoginPageComponent } from './LoginDetails/login/login-page/login-page.component';

const routes: Routes = [
  {
    path: "",
    loadChildren:() => import("./LoginDetails/login/login.module").then(m=>m.LoginModule)
  },
  {
    path: "",
    loadChildren:() =>
      import("./LoginDetails/dashboard/dashboard.module").then(m=>m.DashboardModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

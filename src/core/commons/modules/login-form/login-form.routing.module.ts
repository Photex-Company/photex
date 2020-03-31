import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form.component';
import { NoAuthGuard } from 'src/core/auth/guard/no-auth-guard';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginFormRoutingModule {}

export const routedComponents = [LoginFormComponent];

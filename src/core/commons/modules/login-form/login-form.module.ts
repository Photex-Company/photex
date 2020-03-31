import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form.component';
import { SharedModule } from 'src/shared/shared.module';
import { LoginFormRoutingModule, routedComponents } from './login-form.routing.module';



@NgModule({
  declarations: [routedComponents, LoginFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginFormRoutingModule
  ]
})
export class LoginFormModule { }

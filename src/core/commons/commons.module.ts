import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { SharedModule } from 'src/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormModule } from './modules/login-form/login-form.module';
import { WelcomeMenuComponent } from './components/welcome-menu/welcome-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProfileTabComponent,
    SidebarComponent,
    UploadFormComponent,
    HeaderComponent,
    WelcomeMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginFormModule,
    RouterModule
  ],
  exports: [
    ProfileTabComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class CommonsModule { }

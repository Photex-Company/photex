import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import { SharedModule } from 'src/shared/shared.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';



@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    PortalSharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { SharedModule } from 'src/shared/shared.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';


@NgModule({
  declarations: [CataloguePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    PortalSharedModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }

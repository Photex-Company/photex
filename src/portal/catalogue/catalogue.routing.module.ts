import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const catalogueRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(catalogueRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogueRoutingModule { }

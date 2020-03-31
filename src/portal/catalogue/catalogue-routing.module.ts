import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';


const routes: Routes = [
  {
    path: '',
    component: CataloguePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }

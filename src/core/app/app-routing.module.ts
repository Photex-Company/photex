import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { Routing } from './enums/routing.enum';
import { AuthGuard } from '../auth/guard/auth.guard';
import { NoAuthGuard } from '../auth/guard/no-auth-guard';

const routes: Routes = [
  { path: '', redirectTo: Routing.DASHBOARD, pathMatch: 'full' },
  {
    path: Routing.DASHBOARD,
     loadChildren: () => import('../../portal/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: Routing.LOGIN,
    loadChildren: '../commons/modules/login-form/login-form.module#LoginFormModule',
    canActivate: [NoAuthGuard]
  },
  {
    path: Routing.CATALOGUE,
     loadChildren: () => import('../../portal/catalogue/catalogue.module').then(m => m.CatalogueModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Routing } from 'src/core/app/enums/routing.enum';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isLoggedOut();
  }

  isLoggedOut(): boolean {
    if (this.authService.isUserLoggedIn() === false) {
      return true;
    } else {
      this.router.navigate([Routing.DASHBOARD]);
      return false;
    }
  }
}

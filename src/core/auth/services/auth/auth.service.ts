import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { CookiesService } from '../cookies/cookies.service';
import { Router } from '@angular/router';
import { Routing } from 'src/core/app/enums/routing.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private storageService: StorageService,
    private cookiesService: CookiesService
  ) { }

  isUserLoggedIn() {
    return this.storageService.isUserLoggedIn();
  }

  login(username: string, password: string) {
    return this.cookiesService
      .getCookiesAsync(username, password).toPromise().then(
        (res: any) => {
          console.log(res);
          let headers = res.headers;
          console.log(headers);
          console.log('login in auth service');
          this.setUserLoggedIn(username);
        })
      .catch((err) => {
        console.log(err);
      });
  }

  setUserLoggedIn(username: string): void {
    this.storageService.storeLoggedIn(username);
    this.storageService.storeUserName(username);
  }

  logout() {
    this.storageService.removeData();
    this.router.navigate([Routing.LOGIN]);
  }

}

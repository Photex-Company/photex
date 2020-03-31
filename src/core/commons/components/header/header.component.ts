import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from 'src/core/auth/services/storage/storage.service';
import { AuthService } from 'src/core/auth/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.storageService.loggedIn$.subscribe(user => {
      this.name = user ? user.login : '';
    });
  }

  logout() {
    this.authService.logout();
  }

  isLogged() {
    return this.authService.isUserLoggedIn();
  }

}

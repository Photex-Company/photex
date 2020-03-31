import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photex-web';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  displaySidebar() {
    return this.route.firstChild && !this.route.firstChild.snapshot.data.hideSidebar;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/core/auth/services/auth/auth.service';
import { Routing } from 'src/core/app/enums/routing.enum';

@Component({
  selector: 'app-welcome-menu',
  templateUrl: './welcome-menu.component.html',
  styleUrls: ['./welcome-menu.component.scss']
})
export class WelcomeMenuComponent implements OnInit {

  @Input() name: string;

  Routing: typeof Routing = Routing;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
  none() {

  }
}

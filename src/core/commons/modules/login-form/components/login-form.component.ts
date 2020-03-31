import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/auth/services/auth/auth.service';
import { Router } from '@angular/router';
import { UrlPassingService } from 'src/core/commons/services/url-passing.service';
import { Routing } from 'src/core/app/enums/routing.enum';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginPlaceholder = 'Enter login';
  public passwordPlaceholder = 'Password';

  constructor(
    private authService: AuthService,
    private routerExt: UrlPassingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routerExt.passedUrl = this.router.url;
  }

  login(username, password) {
    this.authService.login(username, password).then(() => {

      console.log('logged!');
      this.router.navigate([Routing.DASHBOARD]);
    });
  }

  loginUser(e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    this.login(username, password);
  }
}

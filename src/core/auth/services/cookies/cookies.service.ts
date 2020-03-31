import { Injectable } from '@angular/core';
import { Globals } from 'src/shared/services/globals.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  private ACCOUNT_API_URL: string = this.globals.API_URL + '/account';

  constructor(
    private globals: Globals,
    private http: HttpClient
  ) { }


  public getCookiesAsync(username, password): Observable<any> {
    const body = {
      username: username,
      password: password
    };
    let headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'access-control-expose-headers': 'x-total-count',
      // 'Access-Control-Allow-Credentials': 'true'
    });

    return this.http.post(this.ACCOUNT_API_URL + '/login', body, { observe: 'response', headers });
  }
}

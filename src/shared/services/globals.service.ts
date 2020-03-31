import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Globals {

  API_URL: string = environment.apiUrl;

  constructor() { }
}

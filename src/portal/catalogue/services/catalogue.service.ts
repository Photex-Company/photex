import { Injectable } from '@angular/core';
import { Globals } from 'src/shared/services/globals.service';
import { HttpClient } from '@angular/common/http';
import { Catalogue } from '../models/catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private CATALOGUE_API_URL: string = this.globals.API_URL + '/catalogue';

  constructor(
    private globals: Globals,
    private http: HttpClient
  ) { }

  public getAllCatalogues() {
    return this.http.get<Catalogue>('https://photex.azurewebsites.net/api/catalogue');
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlPassingService {
  passedUrl: string = undefined;
}

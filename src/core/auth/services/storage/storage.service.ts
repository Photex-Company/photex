import { Injectable } from '@angular/core';
import store from 'store';
import { Observable, BehaviorSubject } from 'rxjs';
import { Logged } from '../../models/storage/logged.model';
import { StorageAbstract } from '../../models/storage/storageAbstract';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public loggedIn$: Observable<Logged>;
  public cookies$: Observable<string>;

  public cookiesBehSubject: BehaviorSubject<string>;
  private loggedInBehSubject: BehaviorSubject<Logged>;

  constructor() {
    this.setBehavioralSubjects();
    this.setObservables();
  }

  setBehavioralSubjects() {
    this.loggedInBehSubject = new BehaviorSubject(store.get(StorageAbstract.IS_LOGGED));
  }

  setObservables() {
    this.loggedIn$ = this.loggedInBehSubject.asObservable();
  }

  isUserLoggedIn() {
    try {
      const login = this.loggedInBehSubject.value.login;

      return !!this.loggedInBehSubject.value[login];
    } catch (error) {
      return false;
    }
  }

  storeLoggedIn(username: string): void {
    const accountLogged: Logged = {
      login: username
    };
    accountLogged[username] = true;

    store.set(StorageAbstract.IS_LOGGED, accountLogged);
    this.loggedInBehSubject.next(accountLogged);
  }

  storeUserName(name: string) {
    store.set(StorageAbstract.USER, name);
  }

  getUserName(): string {
    return store.get(StorageAbstract.USER);
  }

  removeData() {
    store.remove(StorageAbstract.USER);
    store.remove(StorageAbstract.IS_LOGGED);

    this.loggedInBehSubject.next(null);
  }

}

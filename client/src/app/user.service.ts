import {Injectable} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AuthService) {

  }

  public isAuthenticated(): Observable<boolean> {
    // @ts-ignore
    if (window.Cypress) {
      return of(localStorage.getItem("auth0Cypress") !== null);
    } else {
      return this.auth.isAuthenticated$;
    }
  }

  public getUser(): Observable<User> | null {
    // @ts-ignore
    if (window.Cypress) {
      const auth0 = JSON.parse(localStorage.getItem("auth0Cypress")!);
      // @ts-ignore
      return of({nickname: auth0.user.nickname, email: auth0.user.email})
    } else {
      const user: Observable<any> = this.auth.user$;
      return user ? user : of({nickname: 'unknown', email: 'unknown'});
    }
  }
}

export interface User {
  nickname: string,
  email: string,
  picture?: string
  sub: string
}

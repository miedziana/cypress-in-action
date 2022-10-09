import {Injectable} from '@angular/core';
import {AuthGuard} from '@auth0/auth0-angular';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable()
export class UserAuthGuard extends AuthGuard {

  override canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> {
    // @ts-ignore
    if (window.Cypress) {
      return of(localStorage.getItem("auth0Cypress") !== undefined);
    } else {
      return super.canActivate(route, state);
    }
  }
}

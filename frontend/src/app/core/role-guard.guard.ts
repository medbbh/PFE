import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
  }

  // isAuthorized(route : ActivatedRoute) : boolean{
  //   const roles = ['Admin']
  //   const expectedRoles = route.data.expected
  //   const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);
  //   return roleMatches < 0  ? false : true;



  // }
}

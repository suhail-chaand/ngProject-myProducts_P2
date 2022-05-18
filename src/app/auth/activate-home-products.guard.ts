import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from '../services/db.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateHomeProductsGuard implements CanActivate {
  constructor(private dbs: DbService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.dbs.isLoggedIn) {
      return true
    }
    else {
      return false
    }
  }

}

import { map, Observable, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";


const checkAuthStatus = ():Observable<boolean> =>{
  const authService:AuthService = inject(AuthService);
  const router:Router = inject(Router);
  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => console.log('Authenticated:', isAuthenticated)),
    tap((isAuthenticated) => {
      if(isAuthenticated){
        router.navigate(['./']);
      }
    }),
    map(isAuthenticated => !isAuthenticated)
  );
};

export const canMatchPublicGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return checkAuthStatus();
};

export const canActivatePublicGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  segments: RouterStateSnapshot
) => {
  return checkAuthStatus();
};

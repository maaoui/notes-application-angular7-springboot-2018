import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthentificationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // Autorisation accordée donc retourne true
            return true;
        }

        // Non authentifié donc renvoie à la page de login via returnUrl
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}

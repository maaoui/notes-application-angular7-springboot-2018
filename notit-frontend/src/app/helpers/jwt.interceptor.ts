import { AuthentificationService } from '../services/authentification.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthentificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // ajoute un header d'autorisation avec un json web token si disponible
        // const re = '/utilisateurs/signin';
        // const re2 = '/utilisateurs/signup';
        // const re3 = '/utilisateurs/checkMail';
        // const re4 = '/utilisateurs/getUser';

        // if (request.url.search(re) === -1 && request.url.search(re2) === -1
        //  && request.url.search(re3) === -1) {

        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
  }
// }

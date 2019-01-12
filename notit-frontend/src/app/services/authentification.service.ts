import { map } from 'rxjs/operators';
import { IUser } from '../domain/iuser';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, config } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;


  URL = 'http://localhost:8080/utilisateurs/';

  constructor(private _http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
}
getAuthorizationToken() {
  return localStorage.getItem('currentUser');
}
getDecodedAccessToken(myRawToken: string): any {
  const helper = new JwtHelperService();
  return helper.decodeToken(myRawToken);
  // const decodedToken = helper.decodeToken(myRawToken);
  // Other functions
  // const expirationDate = helper.getTokenExpirationDate(myRawToken);
  // const isExpired = helper.isTokenExpired(myRawToken);

  // return decodedToken;

}
login(email: string, password: string) {
  let params = new HttpParams();
  params = params.append('email', email);
  params = params.append('password', password);
  // return <Observable<any>>this.http.post(this.URL, {}, );
  return this._http.post<any>(this.URL + 'signin', {}, { params: params})
      .pipe(map(user => {
          // Le login réussi si il y a un token jwt dans la réponse.
          if (user && user.token) {
              // Stock les détails utilisateurs et le token jwt dans le Local storage
              // afin de garder l'utilisateur connecté pendant les changements et rafraichissemnts
              //  de pages.
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
          }

          return user;
      }));
}
signup(user: any): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return <Observable<any>>this._http.post(this.URL + 'signup', user);
}
logout() {
  // Retire l'utilisateur du local storage en cas de log out
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}





// getAllUsers(): Observable<IUser[]> {
  //   return  this._http.get<IUser[]>(this.URL);
  //  }

  //  login(email: any , password: any): Observable<any> {
  //     const URLsign = this.URL + '/signin';
  //     return this._http.post(URLsign , );
  //  }



  //  addNote( notetoadd: any): Observable<any> {

  //   return this._http.post(this.URL, notetoadd);
  // }
  // changenote(notetochange: any): Observable<any> {
  //   return this._http.put(this.URL , notetochange);
  // }
  // deleteNote(id: number ): Observable<any> {
  //   console.log('delete' + id);
  //   return this._http.delete(this.URL + id);
  // }
}

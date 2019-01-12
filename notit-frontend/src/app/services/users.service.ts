import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../domain/iuser';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8080/utilisateurs';

  getAll() {
      return this.http.get<IUser[]>(`${this.URL}`);
  }

  getById(email: String) {
      return this.http.get(`${this.URL}/getbyemail/${email}`);
  }

  register(user: any) {
      return this.http.post(`${this.URL}/create`, user);
  }

  update(user: IUser) {
      return this.http.put(`${this.URL}/users${user.email}`, user);
  }

  delete(email: String) {
      return this.http.delete(`${this.URL}/users${email}`);
  }
}

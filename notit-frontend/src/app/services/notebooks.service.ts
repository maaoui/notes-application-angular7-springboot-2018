import { Observable } from 'rxjs';
import { INotebook } from './../domain/inotebooks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotebooksService {

  URL = 'http://localhost:8080/notesbook/';
  constructor(private _http: HttpClient) { }

  getAllNotebooks(): Observable<INotebook[]> {
    return  this._http.get<INotebook[]>(this.URL);
   }
  addNotebook( notebook: String): Observable<any> {
    const body = {
      'name' : notebook
    };
    return this._http.put(this.URL, body);
  }
}

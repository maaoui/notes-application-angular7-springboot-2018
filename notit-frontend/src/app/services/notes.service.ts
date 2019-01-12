import { INotebook } from './../domain/inotebooks';
import { INotes } from './../domain/inotes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  URL = 'http://localhost:8080/notes/';

  constructor(private _http: HttpClient) { }

  getAllNotes(): Observable<INotes[]> {
    return  this._http.get<INotes[]>(this.URL);
   }
   addNote( notetoadd: any, user: any): Observable<any> {
      const myNotetoadd = {
        'note': notetoadd,
        'user': user
      };
    return this._http.post(this.URL, myNotetoadd);
  }
  changenote(notetochange: any): Observable<any> {
    return this._http.put(this.URL , notetochange);
  }
  deleteNote(id: number ): Observable<any> {
    console.log('delete' + id);
    return this._http.delete(this.URL + id);
  }
}

import { Observable } from 'rxjs';
import { IProject } from './../domain/iprojects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL = 'http://localhost:8080/project/';
  constructor(private _http: HttpClient) { }

  getAllProjects(): Observable<IProject[]> {
    return  this._http.get<IProject[]>(this.URL);
   }
  addProject( project: IProject): Observable<any> {
    return this._http.put(this.URL, project);
  }
}


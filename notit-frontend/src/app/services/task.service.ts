import { Observable } from 'rxjs';
import { ITask } from './../domain/itasks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  URL = 'http://localhost:8080/tasks/';
  constructor(private _http: HttpClient) { }

  getAllTasks(): Observable<ITask[]> {
    return  this._http.get<ITask[]>(this.URL);
   }
  addTask( task: ITask): Observable<any> {
    return this._http.put(this.URL, task);
  }
}





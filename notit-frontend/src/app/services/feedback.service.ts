import { Observable } from 'rxjs';
import { IFeedback } from './../domain/ifeedback';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  URL = 'http://localhost:8080/feedback/';
  constructor(private _http: HttpClient) { }

  getAllfeedbacks(): Observable<IFeedback[]> {
    return  this._http.get<IFeedback[]>(this.URL);
   }
  addFeedback( feedback: any): Observable<any> {
    return this._http.put(this.URL, feedback);
  }
}

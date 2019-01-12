import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilternotebookService {

  private searchSource = new BehaviorSubject('');
  currentSearch = this.searchSource.asObservable();

  constructor() { }

  changeBook(message: string) {
    this.searchSource.next(message);
  }
}

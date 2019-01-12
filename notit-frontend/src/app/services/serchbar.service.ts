import { INotes } from './../domain/inotes';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SerchbarService {
  private noteToAdd = new Subject();
  private searchSource = new BehaviorSubject('');

  currentSearch = this.searchSource.asObservable();
  currentNoteToAdd = this.noteToAdd.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.searchSource.next(message);
  }
  changeNote(note: any) {
    console.log(note);
    this.noteToAdd.next(note);
    console.log(this.noteToAdd);
  }
}

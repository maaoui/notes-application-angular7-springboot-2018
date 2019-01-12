import { IUser } from './../../../domain/iuser';
import { AuthentificationService } from './../../../services/authentification.service';
import { UsersService } from './../../../services/users.service';
import { FilternotebookService } from './../../../services/filternotebook.service';
import { NotesService } from './../../../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { INotes } from 'src/app/domain/inotes';
import { SerchbarService } from 'src/app/services/serchbar.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'ssnode_modules/rxjs';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  data: INotes[];
  filtredData: INotes[];
  filtredDatabybook: INotes[];
  myNoteStyle = '';
  notetoadd: any;
  search = '';
  bookid = '';
  noteBackgroundColor: '#f8eda6';
  item: any;
  currentUser: IUser;
  currentUserSubscription: Subscription;
  user: any;
  constructor( private auth: AuthentificationService, private toastr: ToastrService , private _service: NotesService ,
    private _searchService: SerchbarService, private filterBookService: FilternotebookService,
    private _usersService: UsersService) {
      this.currentUserSubscription = this.auth.currentUser.subscribe(user => {
        this.currentUser = user;
        this.user = this.auth.getDecodedAccessToken(this.currentUser.token);
      });
  }


  ngOnInit() {
  this._usersService.getById(this.user.sub).subscribe(
    res => this.data = res.notes ,
    err => {
      return console.log(`ATTENTION : Il ya l'exception : {err} `);
    },
    () => {

      this.filtredDatabybook = this.data;

      this._searchService.currentSearch.subscribe(search => {
        this.search = search;
        this.filtredData = this.data.filter(e => e.title.indexOf(search) !== -1);
        this.filtredDatabybook = this.filtredData;
      });

    this.filterBookService.currentSearch.subscribe(bookid => {

      this.bookid = bookid;

      if (bookid === 'all' || bookid === '')  {
        this.filtredDatabybook = this.filtredData;
      } else {
          console.log(this.filtredDatabybook);
        this.filtredDatabybook = this.filtredData.filter(e => e.notebook.name === this.bookid);
      }
    });
    this._searchService.currentNoteToAdd.subscribe(noteToAdd => {
       console.log(noteToAdd);
      this.notetoadd = noteToAdd;
      this.filtredDatabybook.push(<INotes>noteToAdd);
    });

  }
    );

  }
  changenote(note: INotes) {
    this._service.changenote(note).subscribe();
   console.log('field has been modified');
  //  this.toastr.success('the note has been changed');

  }

   onDeleteNote(noteid) {

     this._service.deleteNote(noteid).subscribe();
     console.log('the note has been deleted ');
     this.toastr.success('the note is deleted');
     this.filtredDatabybook = this.filtredDatabybook.filter(e => e.id !== noteid);
  }
  receiveColor($event) {
    this.noteBackgroundColor = $event;
    console.log(this.noteBackgroundColor);
    this.item.color = this.noteBackgroundColor;
    console.log(this.item);
    this.changenote(this.item);
    this.changeData( this.item );
  }
  changeitem(note: any ) {
    console.log(note);
    this.item = {
      id: note.id,
      title: note.title,
      text: note.text,
      color: this.noteBackgroundColor,
      lastModifiedOn: note.lastModifiedOn,
      notebook: note.notebook
    };
  }
  changeData( newobject ) {
    for (const  i in this.filtredDatabybook) {
      if (this.filtredDatabybook[i].id === newobject.id) {
        this.filtredDatabybook[i] = newobject;
         break;
      }
    }
 }
}

import { IUser } from './../../../../domain/iuser';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-addcollaborator',
  templateUrl: './addcollaborator.component.html',
  styleUrls: ['./addcollaborator.component.scss']
})
export class AddcollaboratorComponent implements OnInit {

  selectedValue;
  isVisible = false;
  data: IUser[];
  constructor(private _service: UsersService) {}
  ngOnInit() {
    this._service.getAll().subscribe(
      res => this.data = res,
      err => console.log(`ATTENTION : Il ya l'exception : {err} `)
      );
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

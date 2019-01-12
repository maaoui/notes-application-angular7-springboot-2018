import { Component, OnInit, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrls: ['./changecolor.component.scss']
})
export class ChangecolorComponent implements OnInit {
  noteBackgroundColor = '#f8eda6';
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit() {
  }
  constructor() {}

  changecolor(color: string) {
    this.noteBackgroundColor = color;
    console.log(this.noteBackgroundColor);
    this.sendMessage();
  }
  sendMessage() {
    this.messageEvent.emit(this.noteBackgroundColor);
  }
}

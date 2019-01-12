import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  now: Date = new Date();
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
   }

  ngOnInit() {

  }

}

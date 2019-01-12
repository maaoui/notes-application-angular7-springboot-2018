import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellouser',
  templateUrl: './hellouser.component.html',
  styleUrls: ['./hellouser.component.scss']
})
export class HellouserComponent implements OnInit {
  now: Date = new Date();
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
   }

  ngOnInit() {
  }

}

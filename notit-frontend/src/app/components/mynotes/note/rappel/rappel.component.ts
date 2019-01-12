import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-rappel',
  templateUrl: './rappel.component.html',
  styleUrls: ['./rappel.component.scss']
})
export class RappelComponent implements OnInit {
  isVisible = false;
  notificationDate: Date;
  now: Date = new Date();
  ngOnInit() {

  }


  constructor(private toastr: ToastrService) {
    setInterval(() => {
      this.now = new Date();
      if (new Date(this.now).getTime() === (this.notificationDate).getTime() ) {
        this.toastr.success('you have a note notification hurry up');
      }
    }, 1);
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
  onChange(result: Date): void {
    this.notificationDate = result;
  }

  onOk(result: Date): void {
    console.log('onOk', result);
  }
}



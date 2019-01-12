import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { IFeedback } from 'src/app/domain/ifeedback';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  subject: string;
  mytext: string;
  data: IFeedback;
  constructor(private _service: FeedbackService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  onAddFeedback() {
    const myfeedbacktoadd = {
      subject: this.subject,
      mailContent: this.mytext
    };
    console.log(myfeedbacktoadd);
    this._service.addFeedback(myfeedbacktoadd).subscribe();
    this.subject = '';
    this.mytext = '';
    this.toastr.success('your feedback was sended. Thank you');
  }
}

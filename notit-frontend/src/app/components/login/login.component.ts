import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isVisible = false;
  validateForm: FormGroup;
  email: string;
  password: string;
  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
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

  constructor(private fb: FormBuilder , private Auth: AuthentificationService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
  login() {
    console.log(this.email, this.password);
      this.Auth.login(this.email, this.password).subscribe(
        res => console.log('completed login'),
         err => console.log(`ATTENTION : Il ya l'exception : {err} `),
         () => {
          this.router.navigate(['/dashboard']);
          this.isVisible = false;
          this.toastr.success('you are connected');
        }
        );
  }
}

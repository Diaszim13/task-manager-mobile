import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public service: LoginService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required, Validators.min(5)]],
      password: ['', [Validators.required, Validators.min(3)]]
    });
  }

  login() {
    const data = this.form.getRawValue();

    if(data) {
      const result = this.service.login(data);

      console.log(result);

    }
  }
}

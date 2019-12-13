import { ApiError } from './../../models/rest/ApiError';
import { AuthenticationService } from './../../services/application/authentication/authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private authService: AuthenticationService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    if (this.cookieService.check('token')) {
      this.router.navigateByUrl('/home');
    }
  }

  async onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    await this.authService
    .login(username, password)
    .then(
      (data) => {
        this.cookieService.set('token', data.token);
        window.location.reload();
      }
    ).catch((error: ApiError) => {
      this.snackbar.open(error.clientMessage, 'Sluiten', {duration: 3000});
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiError } from './../../models/rest/ApiError';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/application/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uploadedImage: string | ArrayBuffer;

  registerForm: FormGroup;

  constructor(
    private snackbar: MatSnackBar,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3)]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
      repeatpassword: ['', [
        Validators.required,
        Validators.minLength(8)]]
    });

    if (this.cookieService.check('token')) {
      this.router.navigateByUrl('/home');
    }
  }

  onFileChange(event) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = (e) => {
      this.uploadedImage = reader.result;
    };

    reader.readAsDataURL(file);
  }

  async onSubmit() {
    const username: string = this.registerForm.value.username;
    const firstname: string = this.registerForm.value.firstname;
    const lastname: string = this.registerForm.value.lastname;
    const password: string = this.registerForm.value.password;
    const repeatpassword: string = this.registerForm.value.repeatpassword;

    if (password.length < 8) {
      this.snackbar.open('Het wachtwoord moet minimaal 8 tekens lang zijn.', 'Sluiten', { duration: 5000 });
      return;
    }

    if (password !== repeatpassword) {
      this.snackbar.open('Zorg ervoor dat je je wachtwoord goed herhaald.', 'Sluiten', { duration: 5000 });
      return;
    }

    if (this.uploadedImage == null || this.uploadedImage === undefined) {
      this.snackbar.open('Je hebt geen profielfoto ingesteld.', 'Sluiten', {duration: 5000});
      return;
    }

    await this.authService.register(username, firstname, lastname, password, this.uploadedImage.toString())
      .then(
        (data) => {
          this.snackbar.open('U bent succesvol geregistreerd', 'Sluiten', { duration: 5000 });
          this.router.navigateByUrl('login');
        }
      )
      .catch(
        (error: ApiError) => {
          this.snackbar.open(error.clientMessage, 'Sluiten', { duration: 3000 });
        }
      );
  }

  get username() {
    return this.registerForm.get('username');
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get repeatpassword() {
    return this.registerForm.get('repeatpassword');
  }
}

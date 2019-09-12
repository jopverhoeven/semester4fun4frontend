import { Router } from '@angular/router';
import { ApiError } from './../../models/rest/ApiError';
import { AuthenticationService } from './../../services/application/authentication/authentication.service';
import { User } from './../../models/User';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: User;
  doneLoading = false;

  constructor(
    private cookieService: CookieService,
    private authService: AuthenticationService,
    private snackbar: MatSnackBar,
    private router: Router,
  ) { }

  async ngOnInit() {
    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');
      await this.authService.loginWithToken(token)
      .then(
        (data) => this.user = data
      )
      .catch(
        (error: ApiError) => {
          this.cookieService.delete('token');
          this.snackbar.open(error.clientMessage, 'Close', {duration: 3000});
        }
      );
    }

    this.doneLoading = true;
  }

  logOut() {
    window.onbeforeunload = (ev) => {
      this.cookieService.delete('token');
    };

    window.location.reload();

  }

}

import { ApiError } from './../../models/rest/ApiError';
import { AuthenticationService } from './../application/authentication/authentication.service';
import { User } from './../../models/User';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private authService: AuthenticationService,
    private cookieService: CookieService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  redirectIfNoToken() {
    if (!this.hasLoginToken()) {
      this.router.navigateByUrl('/home');
    }
  }

  async getUserFromToken(): Promise<User> {
    if (this.hasLoginToken()) {
      const token = this.getLoginToken();

      let user: Promise<User>;

      await (user = this.authService.loginWithToken(token));

      user.catch((error: ApiError) => {
        this.snackbar.open(error.clientMessage, 'Sluiten', {duration: 5000});
        this.cookieService.delete('token');
        this.router.navigateByUrl('/home');
        return user;
      });

      return user;

    }

    return null;
  }

  private hasLoginToken(): boolean {
    return this.cookieService.check('token');
  }

  public getLoginToken(): string {
    return this.cookieService.get('token');
  }

  private setLoginToken(token: string) {
    this.cookieService.set('token', token);
  }

  public removeToken() {
    this.cookieService.delete('token', '/');
  }

}

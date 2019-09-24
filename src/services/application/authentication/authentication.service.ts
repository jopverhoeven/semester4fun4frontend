import { RegisterSubmitModel } from './../../../models/authentication/RegisterSubmitModel';
import { RegisterReturnModel } from './../../../models/authentication/RegisterReturnModel';
import { AuthenticationReturnModel } from './../../../models/authentication/AuthenticationReturnModel';
import { User } from './../../../models/User';
import { AuthenticationSubmitModel } from './../../../models/authentication/AuthenticationSubmitModel';
import { throwError } from 'rxjs';
import { ApiError } from './../../../models/rest/ApiError';
import { DbContextService } from './../../database/db-context.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private dbContext: DbContextService
  ) { }

  async login(username: string, password: string): Promise<AuthenticationReturnModel> {
    const submitModel: AuthenticationSubmitModel = new AuthenticationSubmitModel();
    submitModel.username = username;
    submitModel.password = password;

    let authReturnModel: AuthenticationReturnModel;

    await this.httpClient.post<AuthenticationReturnModel>(`${this.dbContext.RestURL}auth/login`, submitModel)
      .pipe(
        map((data: AuthenticationReturnModel) => authReturnModel = data)
      ).pipe(
        catchError(this.handleError)
      ).toPromise();

    return authReturnModel;
  }

  async loginWithToken(token: string): Promise<User> {
    let user: User;

    await this.httpClient.post<User>(`${this.dbContext.RestURL}auth/token`, token)
      .pipe(
        map((data: User) => user = data)
      ).pipe(
        catchError(this.handleError)
      ).toPromise();

    return user;
  }

  // tslint:disable-next-line: max-line-length
  async register(username: string, firstname: string, lastname: string, password: string, profileImage: string): Promise<RegisterReturnModel> {
    const submitModel: RegisterSubmitModel = new RegisterSubmitModel;
    submitModel.username = username;
    submitModel.firstname = firstname;
    submitModel.lastname = lastname;
    submitModel.profilePicture = profileImage;
    submitModel.password = password;

    let returnModel;

    await this.httpClient.post<RegisterReturnModel>(`${this.dbContext.RestURL}auth/register`, submitModel)
      .pipe(
        map((data: RegisterReturnModel) => returnModel = data)
      ).pipe(
        catchError(this.handleError)
      ).toPromise();

    return returnModel;
  }

  private handleError(error: HttpErrorResponse) {
    const apiError: ApiError = error.error;

    return throwError(apiError);
  }
}

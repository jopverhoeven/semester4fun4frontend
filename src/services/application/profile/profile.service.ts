import { ApiError } from './../../../models/rest/ApiError';
import { Profile } from './../../../models/Profile';
import { DbContextService } from './../../database/db-context.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient,
    private dbContext: DbContextService
  ) { }

  async getProfile(username: string) {
    let profile: Profile;

    await this.httpClient.get<Profile>(`${this.dbContext.RestURL}profile/${username}`)
    .pipe(
      map((data: Profile) => profile = data)
    )
    .pipe(
      catchError(this.handleError)
    ).toPromise();

    return profile;
  }

  private handleError(error: HttpErrorResponse) {

    const apiError: ApiError = error.error;

    return throwError(apiError);
  }
}

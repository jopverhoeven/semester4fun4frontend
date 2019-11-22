import { FollowProfileSubmitModel } from './../../../models/profile/FollowProfileSubmitModel';
import { FollowProfileReturnModel } from './../../../models/profile/FollowProfileReturnModel';
import { UpdateUserGeneralModel } from './../../../models/user/UpdateUserGeneralModel';
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

  async updateProfileGeneral(token: string, firstname: string, lastname: string) {
    const updateUserGeneral: UpdateUserGeneralModel = new UpdateUserGeneralModel;
    updateUserGeneral.firstname = firstname;
    updateUserGeneral.lastname = lastname;
    updateUserGeneral.token = token;

    await this.httpClient.post<ApiError>(`${this.dbContext.RestURL}user/update/general`, updateUserGeneral)
    .pipe(
      catchError(this.handleError)
    ).toPromise();
  }

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

  async followProfile(token: string, profileId: string): Promise<FollowProfileReturnModel> {
    const submitModel: FollowProfileSubmitModel = new FollowProfileSubmitModel();
    submitModel.token = token;
    submitModel.profileId = profileId;

    let returnModel: FollowProfileReturnModel;

    await this.httpClient.post<FollowProfileReturnModel>(`${this.dbContext.RestURL}profile/follow`, submitModel)
    .pipe(
      map(
        (data: FollowProfileReturnModel) => {
          returnModel = data;
        }
      )
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

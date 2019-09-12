import { Profile } from './../../../models/Profile';
import { DbContextService } from './../../database/db-context.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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
    ).toPromise();

    return profile;
  }
}

import { TokenService } from './../../../services/cookies/token.service';
import { ApiError } from './../../../models/rest/ApiError';
import { User } from './../../../models/User';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './../../../services/application/authentication/authentication.service';
import { ProfileService } from './../../../services/application/profile/profile.service';
import { Profile } from './../../../models/Profile';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  doneLoading = false;
  user: User;
  following = false;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    private matSnackBar: MatSnackBar,
  ) { }

  async ngOnInit() {

    const username = this.route.snapshot.paramMap.get('id');

    await this.getProfile(username);
    await this.getUser();

    this.checkIfFollowing();

    this.doneLoading = true;
  }

  async getProfile(username: string) {
    await this.profileService.getProfile(username)
      .then(
        (data) => this.profile = data
      )
      .catch(
        (error: ApiError) => {
          console.log(error);
          this.matSnackBar.open(error.clientMessage, 'Sluiten', { duration: 5000 });
          this.router.navigateByUrl('/404');
        }
      );
  }

  async getUser() {
    await this.tokenService.getUserFromToken()
      .then(
        (data) => {
          this.user = data;
        }
      );
  }

  async followUser() {
    const token = this.tokenService.getLoginToken();
    const profileId = this.profile.profileId;

    if (token == null) { return; }

    await this.profileService.followProfile(token, profileId)
      .then(
        (data) => {
          this.following = data.following;
        }
      );

    await this.getProfile(this.route.snapshot.paramMap.get('id'));
  }

  checkIfFollowing() {
    if (this.user != null) {
      this.profile.followers.forEach(followUser => {
        if (this.user.userId === followUser.userId) {
          this.following = true;
        }
      });
    }
  }

}

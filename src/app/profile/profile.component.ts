import { User } from './../../models/User';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './../../services/application/authentication/authentication.service';
import { ProfileService } from './../../services/application/profile/profile.service';
import { Profile } from './../../models/Profile';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  doneLoading = false;
  user: User;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private cookieService: CookieService,
  ) { }

  async ngOnInit() {

    const username = this.route.snapshot.paramMap.get('id');

    await this.getProfile(username);
    await this.getUser();

    this.doneLoading = true;
  }

  async getProfile(username: string) {
    await this.profileService.getProfile(username).then((data) => this.profile = data);
  }

  async getUser() {
    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');
      await this.authService.loginWithToken(token)
      .then((data) => this.user = data);
    }
  }

}

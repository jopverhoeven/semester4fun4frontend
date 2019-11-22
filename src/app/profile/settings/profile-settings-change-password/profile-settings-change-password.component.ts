import { TokenService } from './../../../../services/cookies/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings-change-password',
  templateUrl: './profile-settings-change-password.component.html',
  styleUrls: ['./profile-settings-change-password.component.css']
})
export class ProfileSettingsChangePasswordComponent implements OnInit {

  doneLoading = false;

  constructor(
    private tokenService: TokenService,
  ) { }

  ngOnInit() {
    this.tokenService.redirectIfNoToken();

    this.doneLoading = true;
  }

}

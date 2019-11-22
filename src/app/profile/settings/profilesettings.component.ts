import { TokenService } from './../../../services/cookies/token.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './../../../services/application/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.css']
})
export class ProfilesettingsComponent implements OnInit {

  doneLoading = false;

  constructor(
    private authService: AuthenticationService,
    private tokenService: TokenService,
  ) { }

  async ngOnInit() {
    this.tokenService.redirectIfNoToken();

    this.doneLoading = true;
  }

}

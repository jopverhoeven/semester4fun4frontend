import { ApiError } from './../../../../models/rest/ApiError';
import { ProfileService } from './../../../../services/application/profile/profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../../../models/User';
import { TokenService } from './../../../../services/cookies/token.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile-settings-general',
  templateUrl: './profile-settings-general.component.html',
  styleUrls: ['./profile-settings-general.component.css']
})
export class ProfileSettingsGeneralComponent implements OnInit {

  doneLoading = false;
  user: User;
  updateForm: FormGroup;

  constructor(
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private snackbar: MatSnackBar,
  ) { }

  async ngOnInit() {
    this.tokenService.redirectIfNoToken();

    await this.tokenService.getUserFromToken()
      .then(
        (data) => this.user = data
      );

    this.updateForm = this.formBuilder.group({
      // firstname: [this.user.firstname, Validators.required],
      // lastname: [this.user.lastname, Validators.required]
    });

    this.doneLoading = true;
  }

  async onSubmit() {
    const firstname = this.updateForm.value.firstname;
    const lastname = this.updateForm.value.lastname;
    const token = this.tokenService.getLoginToken();
    await this.profileService
    .updateProfileGeneral(token, firstname, lastname)
    .catch((error: ApiError) => {
      this.snackbar.open(error.clientMessage, 'Sluiten', {duration: 5000});
    });

    window.location.reload();
  }

  get firstname() {
    return this.updateForm.get('firstname');
  }

  get lastname() {
    return this.updateForm.get('lastname');
  }

}

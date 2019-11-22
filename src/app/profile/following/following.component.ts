import { MatSnackBar } from '@angular/material';
import { ApiError } from './../../../models/rest/ApiError';
import { Profile } from './../../../models/Profile';
import { ProfileService } from './../../../services/application/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  doneLoading = false;
  profile: Profile;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private matSnackBar: MatSnackBar,
  ) { }

  async ngOnInit() {
    const username = this.route.snapshot.paramMap.get('id');

    await this.getProfile(username);

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

}

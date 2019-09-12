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

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {

    const username = this.route.snapshot.paramMap.get('id');

    await this.getProfile(username);

    this.doneLoading = true;
  }

  async getProfile(username: string) {
    await this.profileService.getProfile(username).then((data) => this.profile = data);
  }

}

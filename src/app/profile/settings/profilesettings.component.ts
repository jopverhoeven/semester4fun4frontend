import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.css']
})
export class ProfilesettingsComponent implements OnInit {

  doneLoading = false;

  constructor() { }

  async ngOnInit() {


    this.doneLoading = true;
  }

}

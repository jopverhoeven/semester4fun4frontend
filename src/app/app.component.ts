import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent implements OnInit {

  constructor(

  ) { }

  async ngOnInit() {
  }
}

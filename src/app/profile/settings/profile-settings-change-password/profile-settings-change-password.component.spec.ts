import { OverviewpostComponent } from './../../../overview/post/overviewpost.component';
import { HomeComponent } from './../../../overview/home/home.component';
import { MaterialModule } from './../../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsChangePasswordComponent } from './profile-settings-change-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfileSettingsChangePasswordComponent', () => {
  let component: ProfileSettingsChangePasswordComponent;
  let fixture: ComponentFixture<ProfileSettingsChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule, BrowserAnimationsModule ],
      providers: [ CookieService, FormBuilder ],
      declarations: [ ProfileSettingsChangePasswordComponent, HomeComponent, OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

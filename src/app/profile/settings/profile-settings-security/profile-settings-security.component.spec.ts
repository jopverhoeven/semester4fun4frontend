import { OverviewpostComponent } from './../../../overview/post/overviewpost.component';
import { HomeComponent } from './../../../overview/home/home.component';
import { MaterialModule } from './../../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsSecurityComponent } from './profile-settings-security.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';

describe('ProfileSettingsSecurityComponent', () => {
  let component: ProfileSettingsSecurityComponent;
  let fixture: ComponentFixture<ProfileSettingsSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule ],
      // tslint:disable-next-line: max-line-length
      providers: [ CookieService, FormBuilder ],      declarations: [ ProfileSettingsSecurityComponent, HomeComponent, OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

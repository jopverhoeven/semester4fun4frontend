import { OverviewpostComponent } from './../../../overview/post/overviewpost.component';
import { HomeComponent } from './../../../overview/home/home.component';
import { MaterialModule } from './../../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsAccountComponent } from './profile-settings-account.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';

describe('ProfileSettingsAccountComponent', () => {
  let component: ProfileSettingsAccountComponent;
  let fixture: ComponentFixture<ProfileSettingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule ],
      providers: [ CookieService, FormBuilder ],
      declarations: [ ProfileSettingsAccountComponent, HomeComponent, OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

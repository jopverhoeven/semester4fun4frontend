import { OverviewpostComponent } from './../../overview/post/overviewpost.component';
import { HomeComponent } from './../../overview/home/home.component';
import { MaterialModule } from './../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesettingsComponent } from './profilesettings.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';

describe('ProfilesettingsComponent', () => {
  let component: ProfilesettingsComponent;
  let fixture: ComponentFixture<ProfilesettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule ],
      providers: [ CookieService, FormBuilder ],
      declarations: [ ProfilesettingsComponent, HomeComponent, OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

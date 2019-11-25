import { MockModels } from './../../../../models/MockModels';
import { OverviewpostComponent } from './../../../overview/post/overviewpost.component';
import { HomeComponent } from './../../../overview/home/home.component';
import { MaterialModule } from './../../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsGeneralComponent } from './profile-settings-general.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfileSettingsGeneralComponent', () => {
  let component: ProfileSettingsGeneralComponent;
  let fixture: ComponentFixture<ProfileSettingsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule ],
      providers: [ CookieService, FormBuilder ],
      declarations: [ ProfileSettingsGeneralComponent, HomeComponent, OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsGeneralComponent);
    component = fixture.componentInstance;
    component.user = new MockModels().getMockUser();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

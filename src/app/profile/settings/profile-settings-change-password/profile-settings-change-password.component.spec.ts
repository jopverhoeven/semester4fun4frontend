import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsChangePasswordComponent } from './profile-settings-change-password.component';

describe('ProfileSettingsChangePasswordComponent', () => {
  let component: ProfileSettingsChangePasswordComponent;
  let fixture: ComponentFixture<ProfileSettingsChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsChangePasswordComponent ]
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

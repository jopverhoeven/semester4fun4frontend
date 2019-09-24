import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsSecurityComponent } from './profile-settings-security.component';

describe('ProfileSettingsSecurityComponent', () => {
  let component: ProfileSettingsSecurityComponent;
  let fixture: ComponentFixture<ProfileSettingsSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsSecurityComponent ]
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

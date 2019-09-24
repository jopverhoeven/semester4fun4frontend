import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsAccountComponent } from './profile-settings-account.component';

describe('ProfileSettingsAccountComponent', () => {
  let component: ProfileSettingsAccountComponent;
  let fixture: ComponentFixture<ProfileSettingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsAccountComponent ]
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

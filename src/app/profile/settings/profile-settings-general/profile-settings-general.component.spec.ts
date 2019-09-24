import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsGeneralComponent } from './profile-settings-general.component';

describe('ProfileSettingsGeneralComponent', () => {
  let component: ProfileSettingsGeneralComponent;
  let fixture: ComponentFixture<ProfileSettingsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { OverviewpostComponent } from './../post/overviewpost.component';
import { HomeComponent } from './../home/home.component';
import { MaterialModule } from './../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule ],
      providers: [ CookieService, FormBuilder ],
      declarations: [ UserComponent, HomeComponent, OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

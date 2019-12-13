import { OverviewpostComponent } from './../overview/post/overviewpost.component';
import { HomeComponent } from './../overview/home/home.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      // tslint:disable-next-line: max-line-length
      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule  ],
      providers: [ CookieService, FormBuilder ],
      declarations: [ LoginComponent, HomeComponent, OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('password field validity', () => {
    const password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

    let errors = {};
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    password.setValue('pass');
    errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('username field validity', () => {
    const username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();

    let errors = {};
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();

    username.setValue('12');
    errors = username.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('correctly filling in form', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue('username');
    component.loginForm.controls['password'].setValue('sufficientpassword');
    expect(component.loginForm.valid).toBeTruthy();
  });
});

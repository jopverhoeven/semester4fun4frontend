import { OverviewpostComponent } from './../overview/post/overviewpost.component';
import { HomeComponent } from './../overview/home/home.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MaterialModule } from '../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line: max-line-length
      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule,  ReactiveFormsModule, FormsModule, BrowserAnimationsModule ],
      providers: [ CookieService, FormBuilder ],
      declarations: [ RegisterComponent, HomeComponent, OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('password field validity', () => {
    const password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy();

    let errors = {};
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    password.setValue('pass');
    errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('username field validity', () => {
    const username = component.registerForm.controls['username'];
    expect(username.valid).toBeFalsy();

    let errors = {};
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();

    username.setValue('12');
    errors = username.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('repeatpassword field validity', () => {
    const repeatpassword = component.registerForm.controls['repeatpassword'];
    expect(repeatpassword.valid).toBeFalsy();

    let errors = {};
    errors = repeatpassword.errors || {};
    expect(errors['required']).toBeTruthy();

    repeatpassword.setValue('pass');
    errors = repeatpassword.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('correctly filling in form', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['username'].setValue('username');
    component.registerForm.controls['firstname'].setValue('firstname');
    component.registerForm.controls['lastname'].setValue('lastname');
    component.registerForm.controls['password'].setValue('sufficientpassword');
    component.registerForm.controls['repeatpassword'].setValue('sufficientpassword');
    expect(component.registerForm.valid).toBeTruthy();
  });
});

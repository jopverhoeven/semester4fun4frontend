import { HomeComponent } from './../home/home.component';
import { MockModels } from './../../../models/MockModels';
import { Post } from './../../../models/Post';
import { User } from './../../../models/User';
import { MaterialModule } from './../../material/material.module';
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewpostComponent } from './overviewpost.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('OverviewpostComponent', () => {
  let component: OverviewpostComponent;
  let fixture: ComponentFixture<OverviewpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [MaterialModule, RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}]), HttpClientTestingModule, FormsModule ],
      providers: [ CookieService, FormBuilder ],
      declarations: [ OverviewpostComponent, HomeComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewpostComponent);
    component = fixture.componentInstance;
    component.post = new MockModels().getMockPost();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

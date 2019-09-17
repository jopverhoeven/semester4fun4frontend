import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { OverviewpostComponent } from './overview/post/overviewpost.component';
import { ScrollComponent } from './overview/scroll/scroll.component';
import { HomeComponent } from './overview/home/home.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './overview/user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewpostComponent,
    ScrollComponent,
    HomeComponent,
    PostComponent,
    UserComponent,
    ProfileComponent,
    NotFoundComponent,
    ToolbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, CookieService/*, {provide: LocationStrategy, useClass: HashLocationStrategy}*/],
  bootstrap: [AppComponent],
})
export class AppModule { }

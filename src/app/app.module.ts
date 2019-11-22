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
import { ProfileComponent } from './profile/overview/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilesettingsComponent } from './profile/settings/profilesettings.component';
import { ProfileSettingsGeneralComponent } from './profile/settings/profile-settings-general/profile-settings-general.component';
// tslint:disable-next-line: max-line-length
import { ProfileSettingsChangePasswordComponent } from './profile/settings/profile-settings-change-password/profile-settings-change-password.component';
import { ProfileSettingsSecurityComponent } from './profile/settings/profile-settings-security/profile-settings-security.component';
import { ProfileSettingsAccountComponent } from './profile/settings/profile-settings-account/profile-settings-account.component';
import { NewpostComponent } from './newpost/newpost.component';
import { FollowingComponent } from './profile/following/following.component';
import { FollowersComponent } from './profile/followers/followers.component';


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
    RegisterComponent,
    ProfilesettingsComponent,
    ProfileSettingsGeneralComponent,
    ProfileSettingsChangePasswordComponent,
    ProfileSettingsSecurityComponent,
    ProfileSettingsAccountComponent,
    NewpostComponent,
    FollowingComponent,
    FollowersComponent
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

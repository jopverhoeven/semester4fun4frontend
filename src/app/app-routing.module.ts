import { FollowingComponent } from './profile/following/following.component';
import { FollowersComponent } from './profile/followers/followers.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ProfileSettingsGeneralComponent } from './profile/settings/profile-settings-general/profile-settings-general.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './overview/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/overview/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilesettingsComponent } from './profile/settings/profilesettings.component';
import { ProfileSettingsSecurityComponent } from './profile/settings/profile-settings-security/profile-settings-security.component';
import { ProfileSettingsAccountComponent } from './profile/settings/profile-settings-account/profile-settings-account.component';
// tslint:disable-next-line: max-line-length
import { ProfileSettingsChangePasswordComponent } from './profile/settings/profile-settings-change-password/profile-settings-change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'profile/:id/followers', component: FollowersComponent},
  { path: 'profile/:id/following', component: FollowingComponent},
  { path: 'newpost', component: NewpostComponent},
  {
    path: 'settings/profile',
    component: ProfilesettingsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'general'
      },
      {
        path: 'general',
        component: ProfileSettingsGeneralComponent,
      },
      {
        path: 'security',
        component: ProfileSettingsSecurityComponent
      },
      {
        path: 'account',
        component: ProfileSettingsAccountComponent
      },
      {
        path: 'changepassword',
        component: ProfileSettingsChangePasswordComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

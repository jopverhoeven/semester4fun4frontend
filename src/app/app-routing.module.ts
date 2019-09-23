import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './overview/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/overview/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilesettingsComponent } from './profile/settings/profilesettings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'post/:id', component: PostComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'settings/profile', component: ProfilesettingsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

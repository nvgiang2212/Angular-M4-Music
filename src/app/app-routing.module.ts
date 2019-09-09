import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './component/userManager/register/register.component';
import {LoginComponent} from './component/userManager/login/login.component';
import {ContentComponent} from './component/layout/content/content.component';
import {UserComponent} from './component/userManager/user/user.component';
import {CreateSongComponent} from './component/songManager/create-song/create-song.component';
import {DetailSongComponent} from './component/songManager/detail-song/detail-song.component';
import {ListSongComponent} from './component/songManager/list-song/list-song.component';
import {AboutUsComponent} from './component/layout/about-us/about-us.component';



const routes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'my-profile', component: UserComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'song/play', component: DetailSongComponent},
  {path: 'create-song', component: CreateSongComponent},
  {path: 'list-song', component: ListSongComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

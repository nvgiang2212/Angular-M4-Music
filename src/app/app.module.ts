import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/userManager/login/login.component';
import {RegisterComponent} from './component/userManager/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './service/userManager/auth/auth-interceptor';
import {ContentComponent} from './component/layout/content/content.component';
import {HeaderComponent} from './component/layout/header/header.component';
import {UserComponent} from './component/userManager/user/user.component';

import { UploadFileComponent } from './component/upload/upload-file/upload-file.component';
import { CreateSongComponent } from './component/songManager/create-song/create-song.component';
import { UploadAvatarComponent } from './component/upload/upload-avatar/upload-avatar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { CarouselComponent } from './component/layout/carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ListSongComponent } from './component/songManager/list-song/list-song.component';
import { AboutUsComponent } from './component/layout/about-us/about-us.component';
import {DetailSongComponent} from './component/songManager/detail-song/detail-song.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContentComponent,
    HeaderComponent,
    UserComponent,
    UploadFileComponent,
    CreateSongComponent,
    UploadAvatarComponent,
    FooterComponent,
    DetailSongComponent,
    CarouselComponent,
    ListSongComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFontAwesomeModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}

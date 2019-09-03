import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './service/userManager/auth-interceptor';
import {ContentComponent} from './component/content/content.component';
import {HeaderComponent} from './component/header/header.component';
import {UserComponent} from './component/user/user.component';
import {AdminComponent} from './component/admin/admin.component';
import {PmComponent} from './component/pm/pm.component';
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { CreateSongComponent } from './component/create-song/create-song.component';
import { UploadAvatarComponent } from './component/upload-avatar/upload-avatar.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContentComponent,
    HeaderComponent,
    UserComponent,
    AdminComponent,
    PmComponent,
    UploadFileComponent,
    CreateSongComponent,
    UploadAvatarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}

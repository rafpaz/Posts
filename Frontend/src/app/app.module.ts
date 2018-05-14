import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PostsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

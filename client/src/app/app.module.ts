import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdInputModule, MdFormFieldModule } from '@angular/material';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ChatService } from './chat.service';
import { HttpService } from './http.service';
import { SocketService } from './socket.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    appRouting,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MaterialModule,
    MdFormFieldModule 
  ],
  providers: [
    ChatService,
    HttpService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

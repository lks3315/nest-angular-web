import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ChatRoomComponent } from './page/chat-room/chat-room.component';
import { ToolbarComponent } from './page/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SocketIoModule} from "ngx-socket-io";
import {environment} from "../environments/environment";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ChatRoomRoutingModule} from "./page/chat-room/chat-room-routing.module";
import {HomeComponentRoutingModule} from "./page/home/home-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(environment.socketIoConfig),
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ChatRoomRoutingModule,
    HomeComponentRoutingModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

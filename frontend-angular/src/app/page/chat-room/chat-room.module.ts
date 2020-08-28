import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ChatRoomComponent} from "./chat-room.component";
import {ChatRoomRoutingModule} from "./chat-room-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoomRoutingModule,
    MatTableModule,
    MatCardModule
  ],
  declarations: [ChatRoomComponent]
})
export class ChatRoomComponentModule {}

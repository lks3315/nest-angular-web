import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ChatRoomComponent} from "./chat-room.component";
import {ChatRoomRoutingModule} from "./chat-room-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoomRoutingModule
  ],
  declarations: [ChatRoomComponent]
})
export class ChatRoomComponentModule {}

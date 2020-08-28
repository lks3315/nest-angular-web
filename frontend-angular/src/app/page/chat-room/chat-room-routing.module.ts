import {RouterModule, Routes} from "@angular/router";
import {ChatRoomComponent} from "./chat-room.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path: `:nickname`, // path는 :nickname 파라미터 사용
    component: ChatRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoomRoutingModule {}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {MaxLength} from "class-validator";
import {Trim} from "class-sanitizer";
import {ActivatedRoute} from "@angular/router";
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {

  messages = [];

  @MaxLength(40, {message: '$constraint1보다 작아야 합니다.'})
  @Trim()
  nickname = '';

  @MaxLength(200, {message: '$constraint1보다 작아야 합니다.'})
  @Trim()
  message = '';

  joinMsg = '';

  constructor(
    private route: ActivatedRoute,
    private socket: Socket
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nickname = params.nickname;
    });

    this.socket.on('message', message => this.messages.push(message));

    this.socket.on('users-changed', (data) => {
      const user = data['user'];
      if (data['event'] === 'left') {
        this.joinMsg = `${user}님이 나가셨습니다.`;
      } else {
        this.joinMsg = `${user}님이 참가했습니다.`;
      }
    });
  }

  sendMessage() {
    this.socket.emit('add-message', {text: this.message})
    this.message = '';
  }

  ngOnDestroy(): void {
    this.socket.disconnect();
  }
}

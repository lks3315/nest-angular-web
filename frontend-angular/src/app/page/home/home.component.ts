import { Component, OnInit } from '@angular/core';
import {MaxLength} from "class-validator";
import {Trim} from "class-sanitizer";
import {Router} from "@angular/router";
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @MaxLength(40, {message: '$constraint1보다 작아야 합니다.'})
  @Trim()
  nickname: string;

  constructor(
    private router: Router, private socket: Socket
  ) { }

  ngOnInit(): void {
    console.log(`nickname: ${this.nickname}`);
  }

  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.router.navigateByUrl(`chat-room/${this.nickname}`);
  }
}

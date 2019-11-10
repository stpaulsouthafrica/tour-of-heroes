import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // when messages component is createDecipher, angular
  // injects MessageService into MessageService.
  // public=template binding
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}

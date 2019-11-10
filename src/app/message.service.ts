import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // define the array
  messages: string[]=[];

  // how and what to add to the array
  add(message: string){
    this.messages.push(message);
  }

  // clear array content
  clear(){
    this.messages=[];
  }

  constructor() { }
}

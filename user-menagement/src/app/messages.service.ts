import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }

  add(message: string){
    return this.messages.push(message)
  }

  clear(){
    this.messages = []
  }
}

import { Injectable } from '@angular/core';
import { User } from './user'
import { USERS } from './mock-users'
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }
  
  getUsers(): Observable<User[]>{
    this.messageService.add("UserService: 已经获取到用户列表")
    return of(USERS)
  }
}

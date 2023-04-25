import { Component } from '@angular/core';
import { User } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animations';
  users:User[] = [new User('user1','inactive'),new User('user2','active')]
  
  delUser(){
    this.users.splice(0, 1)
  }
}

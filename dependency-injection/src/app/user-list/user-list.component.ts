import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    constructor(private userService: UserService){}

    ngOnInit(): void {
        
    }
    users =  this.userService.getUsers()
}

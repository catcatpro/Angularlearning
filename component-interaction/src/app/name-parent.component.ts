import { Component } from "@angular/core";
import { User, USERS} from './user'
@Component({
    selector: 'app-name-parent',
    template:`
        <h2>{{master}}有{{users.length}}个学生</h2>
        <app-name-child *ngFor="let user of users" [name]="user.name || ' '"></app-name-child>
    `
})

export class NameParentComponent{
    public users: User[] = USERS
    public master: string = '老张'
    constructor(){
        this.users.push({id:32, name: " "})
    }
}
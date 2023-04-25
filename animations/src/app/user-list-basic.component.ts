import { Component, Input } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

import { User } from './user.service'


@Component({
    selector: 'app-user-list-basic',
    template: `
        <ul  [@shrinkOut]="status?'in': ''" *ngIf="status">
            <li  *ngFor="let user of users" [@userState]="user.state" (click)="user.toggleState()">
                {{user.name}}
            </li>
        </ul>
        <button (click)="taggle()">taggle</button>
    `,
    styleUrls: ['./user-list-basic.component.css'],
    animations: [
        trigger('userState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: "scale(1)"
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: "scale(1.1)"
            })),
            transition('inactive => active',animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),

        trigger("flyInOut", [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(1000),
            ]),
            transition('* => void', [
                animate(1000, style({transform: 'translateX(100%)'})),
            ]),

            
        ]),

        trigger("shrinkOut", [
            state("in", style({height:'*'})),
            transition("* => void", [
                style({height: '*'}),
                animate(1500, style({height: 0}))
            ]),
        ])
    ],
})

export class UserListBasicComponent{
    @Input() users:User[] | undefined

    status = true
    taggle(){
        this.status = !this.status   
     }
}



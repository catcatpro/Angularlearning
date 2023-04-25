import { Component, Input  } from "@angular/core";

import { trigger, state, style, animate, transition, keyframes, AnimationEvent, group } from "@angular/animations";

import { User } from "./user.service";


@Component({
    selector: 'app-user-multistep',
    template: `
        <ul>
            <li *ngFor="let user of users"
            (@fiyInOut.start)="animationStarted($event)"
            (@fiyInOut.done)="animationDone($event)"
            [@fiyInOut]="'in'"
            >{{user.name}}</li>
        </ul>
    `,
    styleUrls: ['./user-list-basic.component.css'],
    animations: [
        trigger("fiyInOut", [
            // state("in", style({transform: 'translateX(0)'})),
            // transition("void => *", [
            //     animate(300, keyframes([
            //         style({opacity: 0, transform: "translateX(-100%)", offset: 0}),
            //         style({opacity: 1, transform: "translateX(15px)", offset: 0.3}),
            //         style({opacity: 1, transform: "translateX(0)", offset: 1.0}),
            //     ]))
            // ]),
            // transition("* => void",[
            //     animate(300, keyframes([
            //         style({opacity: 1, transform: "translateX(0)", offset: 0}),
            //         style({opacity: 1, transform: "translateX(-15)", offset: 0.7}),
            //         style({opacity: 0, transform: "translateX(100%)", offset: 1.0}),
            //     ]))
            // ]),

            state("in", style({width: 120, transform: "translateX(0)", opacity:1})),
            transition("void => *", [
                style({width: 10, transform: "translateX(50px)", opacity:0}),
                group([
                 animate('0.3s 0.1s ease', style({
                    truansform: 'translateX(0)',
                    width: 120
                 })),
                 animate('0.3s ease', style({
                   opacity: 1
                 })),
                ])
            ]),
            transition("* => void", [
                group([
                 animate('0.3s ease', style({
                    truansform: 'translateX(50px)',
                    width: 10
                 })),
                 animate('0.3s 0.2s ease', style({
                   opacity: 0
                 })),
                ])
            ])
        ])
    ]
})

export class UserListMultistepComponent{
    @Input() users: User[]|undefined
    animationStarted(event: AnimationEvent){
        console.warn("Animation started: ", event)
    }

    animationDone(event: AnimationEvent){
        console.warn("Animation Done: ", event)
    }
    
}
/*
 * @Author: catcatproer
 * @Date: 2023-01-23 12:18:01
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-23 13:28:55
 * @FilePath: \component-interaction\src\app\astronaut.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component, Input, OnDestroy } from "@angular/core";
import { MissionService } from "./mission.service";
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-astronaut',
    template:`
        <p>
            {{astronaut}}: <strong>{{mission}}</strong>
        </p>
        <button
            (click)="confirm()"
            [disabled]="!announced || confirmed">确认</button>
    `
})


export class AstronautComponent implements OnDestroy{
    @Input() astronaut:string = ''
    mission = "<没有任务>"
    confirmed = false
    announced = false
    subscription?: Subscription

    constructor(private missionService: MissionService){
        this.subscription =  missionService.missionAnnonced$.subscribe(mission => {
            this.mission = mission
            this.announced = true
            this.confirmed = false
        })
    
    }

    confirm(){
        this.confirmed = true
        this.missionService.confirmMission(this.astronaut)
    }



    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }

}
/*
 * @Author: catcatproer
 * @Date: 2023-01-23 11:53:22
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-28 10:41:10
 * @FilePath: \component-interaction\src\app\missioncontrol.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component } from "@angular/core";
import { MissionService } from "./mission.service";
import { ThisReceiver } from "@angular/compiler";

@Component({
    selector: 'app-mission-control',
    template: `
        <h2>导弹控制器</h2>
        <button (click)="announce()">准备开始</button>
        <app-astronaut *ngFor="let astronaut of astronauts" [astronaut]="astronaut"></app-astronaut>
        <h3>日志</h3>
        <ul>
            <li *ngFor="let event of history">{{event}}</li>
        </ul>        
    `,
    styles: ['button{ font-size: 28px;padding: 8px 12px; border:0; }'],
    providers: [MissionService]
})

export class MissionControlComponent{
    astronauts = ["操作员1","操作员2","操作员3"]
    history: string[] = []
    missions = ['发射导弹']
    NextMission = 0

    constructor(private missionService: MissionService)
    {
        missionService.missionConfirmed$.subscribe(astronaut => {
            this.history.push(`${astronaut} 已经确认`)
        })
    }

    announce(){
        let mission = this.missions[this.NextMission++]
        this.missionService.annoncedMisson(mission)
        this.history.push(`任务 "${mission}" 进入准备`)
        if(this.NextMission >= this.missions.length){
            this.NextMission = 0
        }
    }

}
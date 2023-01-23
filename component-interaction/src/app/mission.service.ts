/*
 * @Author: catcatproer
 * @Date: 2023-01-22 12:54:53
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-23 11:48:43
 * @FilePath: \component-interaction\src\app\mission.service.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MissionService{
    //Observable string源
    private missionAnnoncedSource = new Subject<string>()
    private missionConfirmedSource = new Subject<string>()

    //Observable string流
    missionAnnonced$ = this.missionAnnoncedSource.asObservable()
    missionConfirmed$ = this.missionConfirmedSource.asObservable()

    annoncedMisson(mission: string){
        this.missionAnnoncedSource.next(mission)
    }

    confirmMission(astroonaut: string){
        this.missionConfirmedSource.next(astroonaut)
    }
}
/*
 * @Author: catcatproer
 * @Date: 2023-01-28 11:22:01
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-28 11:31:03
 * @FilePath: \component-interaction\src\app\user-team.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component } from "@angular/core";

@Component({
    selector: 'app-user-team',
    template: `
        <link rel="stylesheet" href="../assets/user-team.component.css">
        <h3>Demo</h3>
        <ul>
            <li *ngFor="let member of teams">
                {{ member }}
            </li>
        </ul>
    `
})

export class UserTeamComponent{
    teams: string[] = ["admin", "guest"]
}
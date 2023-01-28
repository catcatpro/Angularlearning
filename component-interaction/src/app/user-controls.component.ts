/*
 * @Author: catcatproer
 * @Date: 2023-01-28 11:09:24
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-28 11:15:37
 * @FilePath: \component-interaction\src\app\user-controls.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component } from "@angular/core";

@Component({
    selector: "app-user-controls",
    template: `
        <style>
            button{
                background-color: white;
                border: 1px solid #777;
            }
        </style>
        <h3>Controls</h3>
        <button>Activate</button>
    `
})

export class UserControlsComponent{
    
}
/*
 * @Author: catcatproer
 * @Date: 2023-01-19 10:22:55
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-19 11:04:00
 * @FilePath: \component-interaction\src\app\countdown-timer.component.ts
 * @Description: s
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
/*
 * @Author: catcatproer
 * @Date: 2023-01-19 10:22:55
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-19 10:32:22
 * @FilePath: \component-interaction\src\app\countdown-timer.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component } from "@angular/core";

@Component({
    selector: 'app-countdown-timer',
    template: `<p>{{message}}</p>`
})

export class CountdownTimerComponent{
    intervalId:number = 0
    message:string = "时间递减"
    seconds:number = 10

    decrease(){
        this.countDown()
    }

    private countDown(){
        this.seconds -= 1
    }
}
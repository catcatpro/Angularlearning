/*
 * @Author: catcatproer
 * @Date: 2023-01-19 10:33:58
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-22 12:21:43
 * @FilePath: \component-interaction\src\app\countdown-parent.compoent.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component, ViewChild } from '@angular/core'
import { CountdownTimerComponent } from './countdown-timer.component'
@Component({
    selector: 'app-countdown-parent-lv',
    template: `
        <h3>时间递减（ViewChild）</h3>
        <button (click)="decrease()">递减</button>
        <div class="seconds">{{seconds() }}</div>
        <app-countdown-timer></app-countdown-timer>
    `,
    styleUrls:['./demo.css']
})


export class CountdownViewChildParentComponent{
    @ViewChild(CountdownTimerComponent)
    private timerComponent?: CountdownTimerComponent

    //调用@ViewChild注解组件 的方法
    decrease(){
        this.timerComponent?.decrease()
    }
    seconds(){
        return this.timerComponent?.seconds
    }

}
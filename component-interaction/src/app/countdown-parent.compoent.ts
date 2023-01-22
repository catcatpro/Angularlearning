import { Component } from '@angular/core'

@Component({
    selector: 'app-countdown-parent-lv',
    template: `
        <h3>时间递减（本地变量）</h3>
        <button (click)="timer.decrease()">递减</button>
        <div class="seconds">{{timer.seconds}}</div>
        <app-countdown-timer #timer></app-countdown-timer>
    `,
    styleUrls:['./demo.css']
})

export class CountdownParentComponent{}
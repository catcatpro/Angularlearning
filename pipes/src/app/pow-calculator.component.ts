import { Component } from '@angular/core'


@Component({
    selector: 'app-pow-calculator',
    template: `
        <div>X: <input  [(ngModel)]="power"></div>
        <div>Y: <input [(ngModel)]="factor"></div>
        <p>
            X的Y次方是：{{ power | powCaloulator : factor}}
        </p>
    `
})

export class PowCaloulatorComponent{
    power =  5;
    factor=  '1'
}
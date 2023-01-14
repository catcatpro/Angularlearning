import { Component } from '@angular/core'

@Component({
    selector: 'app-version-parent',
    template: `
        <h2>版本号生成器</h2>

        <button (click)="newMinor()">生成minor版本</button>
        <button (click)="newMajor()">生成major版本</button>
        <app-version-child [major]="major" [minor]="minor"></app-version-child>
    `
})

export class VersionParentComponent{
    major = 1
    minor = 23

    newMajor():void{
        this.major++
    }

    newMinor():void{
        this.minor++
        this.major= 0
    }
}
import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core'

@Component({
    selector: 'app-version-child', 
    template: `
        <h3>版本号：{{major}}.{{minor}}</h3>
        <h4>更新日志</h4>
        <ul>
            <li *ngFor="let change of changeLog">{{change}}</li>
        </ul>   
    `
})

export class VersionChildComponent implements OnChanges{
    @Input() major: number|undefined
    @Input() minor: number|undefined

    changeLog: string[] = []

    //监听属性值变化
    ngOnChanges(changes: { [propkey: string]:SimpleChange}): void {
        let log: string[] = []
        for(let propName in changes){
            let changedProp = changes[propName]
            let to = JSON.stringify(changedProp.currentValue)
            if(changedProp.isFirstChange()){
                log.push(`初始化 ${propName} 设置为 ${to}`)
            }else{
                let from = JSON.stringify(changedProp.previousValue)
                log.push(`${propName} 从 ${from}更改为 ${to}`)
            }
        }
        this.changeLog.push(log.join(', '))
    }
}
/*
 * @Author: catcatproer
 * @Date: 2023-02-03 11:10:54
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-02-03 11:16:24
 * @FilePath: \dynamic-component\src\app\hero-job.ad.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component, Input } from '@angular/core'
import { AdComponent } from './ad.component'

@Component({
    template: `
        <div class="job-ad">
            <h4>{{ data.headline }}</h4>
            {{ data.body }}
        </div>
    `
})

export class HeroJobComponent implements AdComponent{
    @Input() data: any;
}
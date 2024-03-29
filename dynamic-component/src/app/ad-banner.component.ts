/*
 * @Author: catcatproer
 * @Date: 2023-01-31 13:16:47
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-02-03 14:49:20
 * @FilePath: \dynamic-component\src\app\ad-banner.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component, Input, OnInit, ViewChild, OnDestroy} from '@angular/core'
import { AdDirective } from './ad.directive'
import { AdItem } from './ad-item'
import { AdComponent } from './ad.component'
@Component({
    selector: 'app-ad-banner',
    template: `
        <div class="ad-banner-example">
            <h3>Advertisements</h3>
            <ng-template adHost></ng-template>
        </div>
    `
})

export class AdBannerComponent implements OnInit,OnDestroy{
    @Input() ads: AdItem[] = []

    currentAdIndex = -1
    @ViewChild(AdDirective, {static: true}) adHost!: AdDirective

    interval: any
    
    ngOnInit(): void {  
        this.loadComponent()
        this.getAds()
    }

    ngOnDestroy(): void {
        clearInterval(this.interval)
    }

    loadComponent(){
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length
        const adItem = this.ads[this.currentAdIndex]
        
        const viewConntainerRef = this.adHost.viewContainerRef
        viewConntainerRef.clear()

        const componentRef = viewConntainerRef.createComponent<AdComponent>(adItem.component)
        componentRef.instance.data= adItem.data
    }

    getAds(){
        this.interval = setInterval(() => {
            this.loadComponent()
        }, 3000)
    }
}   
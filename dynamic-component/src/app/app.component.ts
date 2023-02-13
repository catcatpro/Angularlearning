/*
 * @Author: catcatproer
 * @Date: 2023-01-31 11:15:24
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-02-03 14:10:48
 * @FilePath: \dynamic-component\src\app\app.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-component';
  ads: AdItem[]=[]
  constructor(private adService: AdService){}

  ngOnInit(): void {
      this.ads = this.adService.getAds()
  }

}

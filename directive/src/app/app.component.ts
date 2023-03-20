/*
 * @Author: catcatproer
 * @Date: 2023-03-07 10:48:04
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-03-17 10:16:37
 * @FilePath: \directive\src\app\app.component.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  color = "blue"
  title = 'directive';

}

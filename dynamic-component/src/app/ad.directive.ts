/*
 * @Author: catcatproer
 * @Date: 2023-01-31 13:10:13
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-02-03 14:52:51
 * @FilePath: \dynamic-component\src\app\ad.directive.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[adHost]',
})

export class AdDirective{
    constructor(public viewContainerRef: ViewContainerRef){}
}


import { Injectable } from '@angular/core';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
// guonei(国内)guoji(国际)yule(娱乐)tiyu(体育)junshi(军事)keji(科技)caijing(财经)youxi(游戏)qiche(汽车)jiankang(健康)
export class CategoryService {
  categories: Category[] = [
    { type: 'top',name: '推荐' },
    { type: 'guonei',name: '国内' },
    { type: 'guoji',name: '国际' },
    { type: 'yule',name: '娱乐' },
    { type: 'tiyu',name: '体育' },
    { type: 'junshi',name: '军事' },
    { type: 'keji',name: '科技' },
    { type: 'caijing(',name: '财经' },
    { type: 'youxi',name: '游戏' },
    { type: 'qiche',name: '汽车' },
    { type: 'jiankang',name: '健康' },
  ]
  constructor() { }

  getCategoryData(){
    return this.categories
  }
}

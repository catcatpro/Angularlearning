import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../Category';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  categories: Category[] = []

  selectedCategoryAlias:string|null  = null
  constructor(private categoryService: CategoryService, private newsService: NewsService){}

  ngOnInit(): void {
      this.showCategoryData()
  }
  showCategoryData(){
    this.categories = this.categoryService.getCategoryData()
    console.log(this.categories)
  }

  handleTab(index: number){
    this.selectedCategoryAlias = this.categories[index].type

     this.newsService.tabSelected.emit(this.selectedCategoryAlias)
  }

  
}

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News, NewMsg } from '../new';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[]= []

  constructor (private newsService :NewsService){}
  ngOnInit(): void {
      this.showNewsData()

      this.newsService.tabSelected.subscribe(alias => {
        this.tabSelected(alias)
        this.showNewsData()
      })
  }
  showNewsData(){
    this.newsService.getNewsData().subscribe((newsApiData: NewMsg) => this.news = newsApiData.result.data)
  }

tabSelected(alias:string){
  this.newsService.setAlias(alias)
}
}

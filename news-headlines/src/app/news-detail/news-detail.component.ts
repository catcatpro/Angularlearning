import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsDetailData:SafeHtml = ''
  newUrl:string  = ''

  constructor(private newsDetailService: NewsDetailService, private domSanitizer: DomSanitizer, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.showNewsDetailData()
  }

  showNewsDetailData(){
    this.route.queryParams.subscribe((p:any) => this.newUrl = p.newsUrl)

    this.newsDetailService.getNewsData(this.newUrl).subscribe((newsApiData) => this.newsDetailData = this.domSanitizer.bypassSecurityTrustHtml(newsApiData.toString()))
  }

  goback(){
    history.go(-1)
  }
}

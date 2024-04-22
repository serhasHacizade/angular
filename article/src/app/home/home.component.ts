import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articlesData: Array<any> = [];
  constructor(private articleService: ArticleService) { };

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((res) => {
      this.articlesData = res;
      
    });
  };
};

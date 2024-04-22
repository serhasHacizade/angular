import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.css'
})
export class ViewArticleComponent {

  constructor(private articleService: ArticleService, private router: ActivatedRoute) { };
  articlesData: Array<any> = [];
  username: string = "";
  articleIndex: any;
  comment: string = "";
  
  
  ngOnInit(): void {
    
    this.articleIndex = this.router.snapshot.paramMap.get("articleindex");

    this.articleService.getArticles().subscribe((res) => {
      this.articlesData = res;
    });
  };

  addComment() {
    let obj = { username: this.username, comment: this.comment };
    this.articlesData[this.articleIndex].comments.push(obj);
    this.articleService.updateArticles(this.articlesData[this.articleIndex]).subscribe((res) => {
      this.username = "";
      this.comment = "";
    });
  }

}

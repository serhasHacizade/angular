import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
  constructor(public articlesService: ArticleService, private router: Router) { };

  username: string = "";
  title: string = "";
  content: string = "";


  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '250px',
    maxHeight: '300px',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Type your article',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
  };

  post() {
    let postObj = {
      author: this.username,
      title: this.title,
      content: this.content,
      comments: []
    };
    this.articlesService.postArticle(postObj).subscribe((res) => {
      console.log(res);
      this.router.navigate(["/home"]);
    });
  };
}

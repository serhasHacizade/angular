import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pageSize = 8;
  page = 1

  blogData: Array<any> = [];

  constructor(private blogService: BlogService) {
  }
  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
      
    });
  };
};

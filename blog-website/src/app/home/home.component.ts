import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pageSize = 8;
  page = 1

  blogData: Array<any> = [];

  constructor(private blogService: BlogService, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getBlogList();
  };

  openDialog(element: any, vieworupdate: any) {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      data: { blog: element, isUpdate: vieworupdate }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.getBlogList();
    });
  };

  getBlogList() {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    });
  };
};

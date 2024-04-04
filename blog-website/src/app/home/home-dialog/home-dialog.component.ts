import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrl: './home-dialog.component.css'
})
export class HomeDialogComponent {

  isUpdate: boolean = false;
  imageUrl: string = "";
  title: string = "";
  body: string = "";
  commentData: any;


  constructor(private commentService: CommentService,
    @Inject(MAT_DIALOG_DATA) private data: any, private dialogRef:
      MatDialogRef<HomeDialogComponent>) {
    if (data.isUpdate) {
      this.isUpdate = true;

    } else {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
    }
  };

  ngOnInit(): void {
    this.commentService.getComments().subscribe((res) => {
      console.log(res);
      
      this.commentData = res.filter((x: { postId: any; }) => x.postId == this.data.blog.id);
    });
  };

  close() {
    this.dialogRef.close();
  };

};

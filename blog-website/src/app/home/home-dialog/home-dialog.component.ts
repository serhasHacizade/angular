import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from '../../services/comment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

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

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required])
  });

  constructor(private commentService: CommentService,private blogService: BlogService, 
    @Inject(MAT_DIALOG_DATA) private data: any, private dialogRef:
      MatDialogRef<HomeDialogComponent>) {
    if (data.isUpdate) {
      this.isUpdate = true;
      this.form.patchValue({
        title: data.blog.title,
        body: data.blog.body
      });

    } else {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
    }
  };

  ngOnInit(): void {
    this.commentService.getComments().subscribe((res) => {

      this.commentData = res.filter((x: { postId: any; }) => x.postId == this.data.blog.id);
    });
  };

  onSubmit() {
    const request = {
      title: this.form.get("title")?.value,
      body: this.form.get("body")?.value,
      imageId: this.data.blog.imageId,
      userId: this.data.blog.userId,
    };
    this.blogService.updatePosts(this.data.blog.id, request).subscribe((res) => {
      this.dialogRef.close();
    });
  };

  close() {
    this.dialogRef.close();
  };


};

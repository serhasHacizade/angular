import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrl: './boards-dialog.component.css'
})
export class BoardsDialogComponent {
  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  })

  constructor(private dialogRef: MatDialogRef<BoardsDialogComponent>, 
    private boardService: BoardService) { }

  create() {
    this.boardService.createBoard(this.boardForm.get('title')?.value);
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }

}

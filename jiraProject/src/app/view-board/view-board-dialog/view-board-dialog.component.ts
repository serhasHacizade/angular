import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '../../services/board.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrl: './view-board-dialog.component.css'
})
export class ViewBoardDialogComponent {
  title: string = "";
  tasks: Array<string> = [""];
  tasksLoop: any = [false];

  constructor(private dialogRef: MatDialogRef<ViewBoardDialogComponent>, @Inject(MAT_DIALOG_DATA)
  public data: any, public boardService: BoardService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.data.editMode) {
      this.title = this.boardService.boards[this.data.boardIndex]
        .cards[this.data.cardIndex].title;

      this.tasksLoop = this.boardService.boards[this.data.boardIndex]
        .cards[this.data.cardIndex].status;

      this.tasks = this.boardService.boards[this.data.boardIndex]
        .cards[this.data.cardIndex].checklist;
    }
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.tasksLoop.splice(i, 1);
  };

  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);

  };

  close() {
    this.dialogRef.close();
  };

  create() {

    if (this.tasks.some((element: string) => element === "")) {
      this._snackBar.open("Please type new task", "OK")
    } else {

      if (!this.data.editMode) {
        this.boardService.boards[this.data.boardIndex].cards.push({
          title: this.title,
          checklist: this.tasks,
          status: this.tasksLoop
        });
      } else {
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title ;

        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.tasksLoop;

        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist = this.tasks;
      }
      this.boardService.updateDataToLocalStorage();
      this.close();
    }
  };
};

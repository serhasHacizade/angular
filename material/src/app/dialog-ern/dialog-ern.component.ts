import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ern',
  templateUrl: './dialog-ern.component.html',
  styleUrl: './dialog-ern.component.css'
})
export class DialogErnComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}

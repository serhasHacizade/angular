import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from "./convert.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ConvertPipe]
})
export class AppComponent {
  name = "";
  date = "";
  money: number = 0;
  miles: number = 0;
  
  onMilesChange(value: string) {
    this.miles=parseFloat(value);
  }

  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }
  onMoneyChange(value: string) {
    this.money = parseFloat(value);
  }
}

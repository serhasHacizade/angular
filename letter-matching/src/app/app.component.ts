import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { faker } from "@faker-js/faker"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = faker.lorem.lines(1);
  enteredText = "";
  state = "correct"

  getInputValue(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) return "pending";
    return randomLetter === enteredLetter ? "correct" : "incorrect";
  }
}

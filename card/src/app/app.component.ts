import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CardComponent]
})
export class AppComponent {
  posts = [
    {
      title: "Mountain bike",
      imageUrl: "assets/biking.jpeg",
      username: "cbdag",
      content: "I drive very fast"
    },
    {
      title: "Hiking",
      imageUrl: "assets/tree.jpeg",
      username: "cbdag",
      content: "Let's take a tour around Macka Park"
    },
    {
      title: "Climbing",
      imageUrl: "assets/mountain.jpeg",
      username: "cbdag",
      content: "I climbed well today too"
    },
  ]
}

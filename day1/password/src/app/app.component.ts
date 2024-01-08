import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password';
  password = "Eren";

  buttonClick() {
    this.password = "Eren Salih"
    console.log("Event binding öğreniyoruz");
    
  };
  gettPassword() {
    return this.password;
  };
  getName() {
    return "Tekin";
  };
}
  
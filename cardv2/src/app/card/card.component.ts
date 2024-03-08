import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() titleChild: string = "";
  @Input() userNameChild: string = "";
  @Input() imageUrlChild: string = "";
  @Input() contentChild: string = "";

}

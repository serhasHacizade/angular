import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrl: './cardform.component.css'
})
export class CardformComponent {

  cardForm = new FormGroup({
    name: new FormControl(""),
    
  });

}

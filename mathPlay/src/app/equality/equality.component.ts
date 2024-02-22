import { Component } from '@angular/core';

import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import {EqualityValidatorsComponent} from "../equality-validators/equality-validators.component"

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrl: './equality.component.css'
})
export class EqualityComponent {

  mathForm = new FormGroup({
    firstNumber : new FormControl(this.generateNumber()),
    secondNumber : new FormControl(this.generateNumber()),
    answer : new FormControl(""),
  },
  [EqualityValidatorsComponent.addition("firstNumber","secondNumber","answer")]);


  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }
  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }


  generateNumber() {
    return Math.floor(Math.random() * 10);
  }
}

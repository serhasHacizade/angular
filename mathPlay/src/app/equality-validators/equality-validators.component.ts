import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-equality-validators',
  templateUrl: './equality-validators.component.html',
  styleUrl: './equality-validators.component.css'
})
export class EqualityValidatorsComponent {
  static addition(target: string, first:string, second: string) {
    return (form: AbstractControl) => {

      const sum = form.value[target];
      const firstNumber= form.value[first];
      const secondNumber = form.value[second];
      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }
      return { addition: true }
    };
  };
}

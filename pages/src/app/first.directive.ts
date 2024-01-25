import { Directive } from '@angular/core';

@Directive({
  selector: '[appFirst]',
  standalone: true
})
export class FirstDirective {

  constructor() {
    console.log("Erne");
    
  }

}

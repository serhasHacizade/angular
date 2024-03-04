import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Backend {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef) { }

  title = 'material';
  news = 58;
  show = false;
  opened = false;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  getData() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

  openSide() {
    this.opened = !this.opened;
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  logChance(index: number | null) {
    console.log(index);
  }

  selectedValue: string = "";
  // options: string[] = ["Angular","React", "Vue"];
  objectOptions = [
    {name:"C#"},
    {name:"Python"},
    {name:"Node Js"},
  ];

  showIt(subject: Backend): string {
    return subject ? subject.name : "";
  }

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  minDate = new Date();
  maxDate = new Date("May 20 2024");

  dateFilter = (date:any) => {
    const day = date.getDay();
    return day != 0;
  };
}

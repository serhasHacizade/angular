import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogErnComponent } from './dialog-ern/dialog-ern.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Backend {
  name: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
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
    { name: "C#" },
    { name: "Python" },
    { name: "Node Js" },
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

  dateFilter = (date: any) => {
    const day = date.getDay();
    return day != 0;
  };

  openSnackBar(message: string, action: string) {
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log("dismissed");
    });
    snackBarRef.onAction().subscribe(() => {
      console.log("triggered");
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogErnComponent, { data: { name: "Can Boz" } });
    dialogRef.afterClosed().subscribe(() => {
      console.log("Modal closed");
    });


  }
}

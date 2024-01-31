import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data = [
    {name: "Can", age: 29, job: "industrial engineer", employed: "No"},
    {name: "Osman", age: 30, job: "software engineer", employed: "No"},
    {name: "Elif", age: 27, job: "business administration graduate", employed: "Yes"},
  ];
  headers = [
    {key: "employed", label: "Are you satisfied with the salary you receive?"},
    {key: "name", label: "Name surname"},
    {key: "age", label: "Name Age"},
    {key: "job", label: "Job"},
  ];

}

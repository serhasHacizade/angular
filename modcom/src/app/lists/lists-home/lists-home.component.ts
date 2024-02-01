import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrl: './lists-home.component.css'
})
export class ListsHomeComponent {

  numbers = [
    { value: 50, label: "Customer" },
    { value: "3500 $", label: "Endorsement" },
    { value: 65, label: "Comments" },
  ];

  images = [
    {
      image: "assets/images/dresser.jpeg",
      title: "Dresser",
      description: "You can put all kinds of belongings"
    },
    {
      image: "assets/images/couch.jpeg",
      title: "Couch",
      description: "wonderful comfortable couch"
    },
  ];

}

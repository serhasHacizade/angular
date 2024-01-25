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
  currentPage = 0;


  images = [
    {
      title: "Space",
      url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Nature",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "City",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "California",
      url: "https://images.unsplash.com/photo-1613070561201-b0dccb982856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Lake",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZXxlbnwwfHwwfHx8MA%3D%3D"
    },{
      title: "Space",
      url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Nature",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "City",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "California",
      url: "https://images.unsplash.com/photo-1613070561201-b0dccb982856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Lake",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZXxlbnwwfHwwfHx8MA%3D%3D"
    },{
      title: "Space",
      url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Nature",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "City",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "California",
      url: "https://images.unsplash.com/photo-1613070561201-b0dccb982856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Lake",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZXxlbnwwfHwwfHx8MA%3D%3D"
    },{
      title: "Space",
      url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Nature",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "City",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "California",
      url: "https://images.unsplash.com/photo-1613070561201-b0dccb982856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Lake",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZXxlbnwwfHwwfHx8MA%3D%3D"
    },{
      title: "Space",
      url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Nature",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "City",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "California",
      url: "https://images.unsplash.com/photo-1613070561201-b0dccb982856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Lake",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZXxlbnwwfHwwfHx8MA%3D%3D"
    },
  ];

  PageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}

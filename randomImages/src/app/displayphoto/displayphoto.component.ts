import { Component, OnInit } from '@angular/core';

import { PhotoService } from "../photo.service";

@Component({
  selector: 'app-displayphoto',
  templateUrl: './displayphoto.component.html',
  styleUrl: './displayphoto.component.css'
})
export class DisplayphotoComponent {
  photoUrl: string = "";
  constructor(private photoService: PhotoService) {};

  ngOnInit(): void {
    this.getImages();
  };

  getImages() {
    this.photoService.getPhotos().subscribe(res => {
      this.photoUrl = res.urls.regular;
      console.log(this.photoUrl);
      
    });

  };
  onClick() {
    this.getImages();
  }
}

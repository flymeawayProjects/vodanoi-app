import { policeImages } from './images/images';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  policeImages = policeImages;
  constructor() { }

  ngOnInit() {
  }

}

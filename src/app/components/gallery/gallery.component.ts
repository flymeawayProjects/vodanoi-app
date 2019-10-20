import { policeImages, armyImages, firebrigadeImages, othersImages } from './images/images';
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  policeImages = policeImages;
  armyImages = armyImages;
  firebrigadeImages = firebrigadeImages;
  otherImages = othersImages;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  config = {
    paddingAtStart: true,
    interfaceWithRoute: false,
    classname: 'my-custom-class',
    listBackgroundColor: `rgb(255, 255, 255)`,
    fontColor: `rgb(52, 58, 64)`,
    backgroundColor: `rgb(255, 255, 255)`,
    selectedListFontColor: `rgb(229, 0, 39)`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false
  };

  appitems = [
    {
      label: 'Policja'
    },
    {
      label: 'Wojsko'
    },
    {
      label: 'Straż pożarna'
    },
    {
      label: 'Inne'
    },
    {
      label: 'Placeholder item'
    },
    {
      label: 'Placeholder item'
    },
    {
      label: 'Placeholder item'
    },
    {
      label: 'Placeholder item'
    },
];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '100%',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageSize: 'contain'
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    this.galleryImages = policeImages;
  }

  selectedItem(event) {
    switch (event.label) {
      case 'Policja' :
        this.galleryImages = policeImages;
        break;
      case 'Wojsko' :
        this.galleryImages = armyImages;
        break;
      case 'Straż pożarna' :
        console.log('here');
        this.galleryImages = firebrigadeImages;
        break;
      case 'Inne' :
        this.galleryImages = othersImages;
        break;
    }
  }

}
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-browse',
  templateUrl: './products-browse.component.html',
  styleUrls: ['./products-browse.component.scss']
})
export class ProductsBrowseComponent implements OnInit {

  showContent: boolean;

  @Output() showProducts: EventEmitter<boolean> = new EventEmitter<boolean>();

  appitems = [
    {
        label: 'Sub-kategoria 1',
        items: [
            {
                label: 'Item 1.1',
            },
            {
                label: 'Item 1.2',
                items: [
                    {
                        label: 'Item 1.2.1',
                    },
                    {
                        label: 'Item 1.2.2',
                        items: [
                            {
                                label: 'Item 1.2.2.1',
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: 'Sub-kategoria 2',
        items: [
        {
            label: 'Item 2.1',
        },
        {
            label: 'Item 2.2',
            navigationExtras: {
                queryParams: { order: 'popular', filter: 'new' },
            }
        }
        ]
    },
    {
        label: 'Item 3',
    },
    {
        label: 'Item 4',
    },
    {
        label: 'Wróć',
    }
];

config = {
  paddingAtStart: true,
  interfaceWithRoute: false,
  classname: 'my-custom-class',
  listBackgroundColor: `rgb(52, 58, 64)`,
  fontColor: `rgb(121, 121, 121)`,
  backgroundColor: `rgb(52, 58, 64)`,
  selectedListFontColor: `rgb(229, 0, 39)`,
  highlightOnSelect: true,
  collapseOnSelect: true,
  rtlLayout: false
};
  constructor() { }

  ngOnInit() {
    this.showContent = false;
  }

  selectedItem(event) {
    this.showContent = true;
    if(event.label === 'Wróć') {
      this.showProducts.emit(true);
    }
  }

  selectedLabel(event) {
    this.showContent = false;
  }

}

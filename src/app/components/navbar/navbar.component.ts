import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  scrollToElement(elementId: string): void {
    this.scrollTo.emit(elementId);
  }

}

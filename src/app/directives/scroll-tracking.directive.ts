import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appScrollTracking]',

})
export class ScrollTrackingDirective {

  @Output() scrollPosition: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  emitScrollPosition($event: Event) {
    this.scrollPosition.emit(window.pageYOffset);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  firstConstantString = 'Federal Signal';
  secondConstantString = 'Na króte zasługujesz!';
  // slidersWords = ['STRAŻ POŻARNA', 'POLICJA', 'POGOTWIE'];
  slidersWords = ['WIEDZA', 'JAKOŚĆ', 'DOŚWIADCZENIE'];
  goTopArrow = false;

  constructor() { }

  ngOnInit() {
  }

  scrollTo(element: string) {
    const el = document.getElementById(element);
    el.scrollIntoView({behavior: 'smooth'});
  }

  showArrowOnScroll(scrollPosition: number) {
    this.goTopArrow = scrollPosition > 700 ? true : false;
  }
}

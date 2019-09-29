import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-words-slider',
  templateUrl: './words-slider.component.html',
  styleUrls: ['./words-slider.component.scss']
})
export class WordsSliderComponent {

  @Input() firstConstantString = '';
  @Input() secondConstantString = '';
  @Input() slidingWords = [];

  constructor() { }

}

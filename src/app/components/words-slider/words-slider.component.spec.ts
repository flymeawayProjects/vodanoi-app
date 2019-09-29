import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsSliderComponent } from './words-slider.component';

describe('WordsSliderComponent', () => {
  let component: WordsSliderComponent;
  let fixture: ComponentFixture<WordsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

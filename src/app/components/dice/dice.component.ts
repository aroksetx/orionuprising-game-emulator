import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  @Input() dice1: number = 2;
  @Input() dice2: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(digit: number): string {
    switch (digit) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
    }
    return 'one'
  }
}

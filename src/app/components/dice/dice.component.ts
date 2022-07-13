import { Component, Input } from '@angular/core';
import {OnNew} from '../../services/on-new.decorator';

const ANIMATION_COUNT = 12;

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  @Input() @OnNew<DiceComponent, number>('onNewDices') dices: [number, number];
  _dices: [number, number] = [3, 5];

  constructor() { }

  onNewDices() {
    this.animateRollDices();
  }

  private animateRollDices() {
    let count = 0;
    let intervalId = setInterval(() => {
      count++;
      this._dices = [this.getRandomDice(), this.getRandomDice()];

      if (count > ANIMATION_COUNT) {
        clearInterval(intervalId);
        this._dices = this.dices;
      }
    }, 150);
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

  private getRandomDice(): number {
    return Math.floor(Math.random() * 6 + 1);
  }
}

import {Component, OnInit, Input} from '@angular/core';
import {Card} from '../../interfaces/card';
import {PlanetType} from '../../interfaces/planet-type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() type: PlanetType = PlanetType.MOON;

  constructor() { }

  ngOnInit(): void {
  }

}

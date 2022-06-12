import {Component, OnInit, Input} from '@angular/core';
import {Card} from '../../interfaces/card';

export enum PlanetType {
  EARTH = 'fa-earth-americas',
  EUROPE = 'fa-earth-europe',
  SATURN = 'fa-planet-ringed',
  MOON = 'fa-planet-moon',
}

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

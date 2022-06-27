import {Component, Input, OnInit} from '@angular/core';
import {PlanetType} from '../../interfaces/planet-type';
import {HomePlanet, ResourceType} from '../../interfaces/player';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: HomePlanet;
  @Input() type: PlanetType = PlanetType.MOON;

  constructor() { }

  ngOnInit(): void {
    switch (this.card.resourceType) {
      case ResourceType.SCIENCE:
          this.type = PlanetType.MOON;
          break;
      case ResourceType.MILITARY:
        this.type = PlanetType.EUROPE;
        break;
      case ResourceType.MONEY:
        this.type = PlanetType.EARTH;
        break;
      case ResourceType.PRODUCTION:
        this.type = PlanetType.EUROPE;
        break;
    }
  }
}

import {Component, HostBinding, Input} from '@angular/core';
import {PlanetType} from '../../interfaces/planet-type';

@Component({
  selector: 'app-neutral-planet',
  templateUrl: './neutral-planet.component.html',
  styleUrls: ['./neutral-planet.component.scss']
})
export class NeutralPlanetComponent {
  @HostBinding('class') classes;
  @Input() type: PlanetType = PlanetType.MOON;

  constructor() { }

  capture() {
    this.classes = 'blue';
  }
}

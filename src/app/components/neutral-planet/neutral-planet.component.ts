import {Component, Input, OnInit} from '@angular/core';
import {PlanetType} from '../../interfaces/planet-type';

@Component({
  selector: 'app-neutral-planet',
  templateUrl: './neutral-planet.component.html',
  styleUrls: ['./neutral-planet.component.scss']
})
export class NeutralPlanetComponent implements OnInit {
  @Input() type: PlanetType = PlanetType.MOON;

  constructor() { }

  ngOnInit(): void {
  }

}

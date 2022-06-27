import {Component, Input, OnInit} from '@angular/core';
import { PlanetType } from 'src/app/interfaces/planet-type';
import {Player} from '../../interfaces/player';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss'],
})
export class PlayerHandComponent implements OnInit {
  PlanetType = PlanetType;

  @Input() player: Player;

  constructor() { }

  ngOnInit(): void {
  }

}

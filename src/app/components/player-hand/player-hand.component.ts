import { Component, OnInit } from '@angular/core';
import { PlanetType } from '../card/card.component';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {
  PlanetType = PlanetType;

  constructor() { }

  ngOnInit(): void {
  }

}

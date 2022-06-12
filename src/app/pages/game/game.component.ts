import {Component} from '@angular/core';
import { PlanetType } from 'src/app/interfaces/planet-type';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    PlanetType = PlanetType;
}
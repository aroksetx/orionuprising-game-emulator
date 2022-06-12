import {Component} from '@angular/core';
import { PlanetType } from 'src/app/interfaces/planet-type';
import { GameServiceService } from 'src/app/services/game-service/game-service.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    PlanetType = PlanetType;

    constructor(
        public gameMessenger: GameServiceService
    ) {
    }
}

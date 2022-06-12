import {Component, OnInit} from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service/game-service.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    constructor(
        public gameMessenger: GameServiceService
    ) {
    }

    ngOnInit() {
    }
}
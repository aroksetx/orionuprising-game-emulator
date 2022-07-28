import {Component, ViewContainerRef} from '@angular/core';
import { PlanetType } from 'src/app/interfaces/planet-type';
import { GameServiceService } from 'src/app/services/game-service/game-service.service';
import {BoardState} from '../../interfaces/board.state';
import {GameMasterService} from '../../services/game-master/game-master.service';
import {ShuffleDeckStep} from '../../services/game-master/steps/shuffle-deck.step';
import {MarketCardComponent} from '../../components/card/market-card/market-card.component';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    providers: [GameMasterService],
})
export class GameComponent {
    PlanetType = PlanetType;
    board: BoardState;
    showMarket: boolean;
    stepName: string;

    constructor(
        public gameMessenger: GameServiceService,
        private gameMaster: GameMasterService,
        private viewContainerRef: ViewContainerRef,
    ) {
        this.init();
    }

    private init() {
        this.board = {
            dices: {dice1: 2, dice2: 5},
            players: [{
                name: 'Kirill',
                fraction: null,
                hero: null,
                deck: null,
                resources: {since: 0, army: 0, money: 0},

                homePlanets: [],
                capturedPlanets: [],
            }],

            cataclysmDeck: [],
            currentCataclysm: null,
        }

        this.board.currentPlayer = this.board.players[0];

        ShuffleDeckStep.shuffle(this.board);
        this.gameMaster.init(this.board.players);
        this.updateCurrentStepName();

        (<any>window).state = this.board;
    }

    nextTurn() {
        this.gameMaster.nextTurn(this.board);
        this.updateCurrentStepName();
    }

    openMarket() {
        this.showMarket = true;
    }

    closeMarket() {
        this.showMarket = false;
        let newCard = this.viewContainerRef.createComponent(MarketCardComponent);
        newCard.instance.elementRef.nativeElement.style.top = '300px';
        newCard.instance.elementRef.nativeElement.style.left = '700px';

        setTimeout(() => {
            newCard.instance.elementRef.nativeElement.style.top = '600px';
            newCard.instance.elementRef.nativeElement.style.left = '1200px';
        }, 500);
    }

    private updateCurrentStepName() {
        this.stepName = this.gameMaster.currentStep$.getValue().getName();
    }
}

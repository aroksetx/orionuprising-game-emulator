import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {BaseStep} from './steps/_base.step';
import {NextCataclysmStep} from './steps/next-cataclysm.step';
import {Player} from '../../interfaces/player';
import {RollDiceStep} from './steps/rool-dice.step';
import {GiveResourcesStep} from './steps/give-resources.step';
import {BoardState} from '../../interfaces/board.state';

@Injectable()
export class GameMasterService {

    lifecycle: BaseStep[];
    end: boolean;

    currentStep: number = 0;
    currentStep$ = new BehaviorSubject<BaseStep>(new NextCataclysmStep());

    init(players: Player[]) {
        // this.shuffleCards();
        // this.handOutCards();

        this.lifecycle = [
            new NextCataclysmStep(),
        ];

        players.forEach(player => {
            this.lifecycle.push(
                new RollDiceStep(),
                new GiveResourcesStep(),
            );
        });
    }

    nextTurn(state: BoardState) {
        if (this.end) {
            this.currentStep$.complete();
            return;
        }

        let step = this.lifecycle[this.currentStep];
        step.execute(state);
        this.currentStep++;
        if (this.currentStep >= this.lifecycle.length) {
            this.currentStep = 0;
        }

        this.currentStep$.next(this.lifecycle[this.currentStep]);

        // this.nextTurn();
    }
}
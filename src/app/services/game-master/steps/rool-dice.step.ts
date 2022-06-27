import {BaseStep} from './_base.step';
import {BoardState} from '../../../interfaces/board.state';

export class RollDiceStep extends BaseStep {
    override getName(): string {
        return 'Roll dices';
    }

    execute(state: BoardState): BoardState {
        state.dices = {
            dice1: Math.floor(Math.random() * 6) + 1,
            dice2: Math.floor(Math.random() * 6) + 1,
        };
        return state;
    }
}
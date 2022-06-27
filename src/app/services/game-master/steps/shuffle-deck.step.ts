import {BaseStep} from './_base.step';
import {BoardState} from '../../../interfaces/board.state';

export class ShuffleDeckStep extends BaseStep {
    override getName(): string {
        return 'Shuffle deck';
    }

    execute(state: BoardState): BoardState {
        state.players.forEach(player => {
            let planets = [];
            for (let i = 0; i < 3; i++) {
                planets.push({
                    activationKey: Math.floor(Math.random() * 12) + 1,
                    guaranteedIncome: Math.floor(Math.random() * 2) + 1,
                    additionalIncome: Math.floor(Math.random() * 4) + 1,
                    resourceType: Math.floor(Math.random() * 4),
                });
            }
            player.homePlanets = planets;
        });
        return state;
    }

    static shuffle(state: BoardState) {
        return new ShuffleDeckStep().execute(state);
    }
}
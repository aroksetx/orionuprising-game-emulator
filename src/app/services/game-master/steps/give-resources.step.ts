import {BaseStep} from './_base.step';
import {BoardState} from '../../../interfaces/board.state';
import {ResourceType} from '../../../interfaces/player';

export class GiveResourcesStep extends BaseStep {
    override getName(): string {
        return 'Receive resources';
    }

    override execute(state: BoardState): BoardState {
        state.currentPlayer.homePlanets.forEach(planet => {
            if (planet.resourceType === ResourceType.SCIENCE) {
                state.currentPlayer.resources.since += planet.guaranteedIncome;
            }
            else if (planet.resourceType === ResourceType.MILITARY) {
                state.currentPlayer.resources.army += planet.guaranteedIncome;
            }
            else if (planet.resourceType === ResourceType.MONEY) {
                state.currentPlayer.resources.money += planet.guaranteedIncome;
            }
        });
        return state;
    }
}
import {BaseStep} from './_base.step';
import {BoardState} from '../../../interfaces/board.state';

export class NextCataclysmStep extends BaseStep {

    override execute(state: BoardState): BoardState {
        state.currentCataclysm = <any>{};
        return state;
    }

    override getName(): string {
        return 'Pull new Cataclysm';
    }
}
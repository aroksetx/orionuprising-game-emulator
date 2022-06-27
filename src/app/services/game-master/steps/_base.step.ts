import {BoardState} from '../../../interfaces/board.state';

export abstract class BaseStep {
    abstract execute(state: BoardState): BoardState;
    abstract getName(): string;
}

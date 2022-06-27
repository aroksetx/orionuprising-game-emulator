import {Player} from './player';
import {CataclysmCard} from './cataclysm-card';

export interface BoardState {
    dices: {
        dice1: number;
        dice2: number;
    },

    players: Player[];
    currentPlayer?: Player;

    cataclysmDeck: CataclysmCard[];
    currentCataclysm?: CataclysmCard;
}
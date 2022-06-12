import {Deck} from "./deck";
import {Fraction} from "./fraction";

export class Player {
    name: string;
    fraction: Fraction;
    hero: Fraction;

    resources: number;
    deck: Deck;
}
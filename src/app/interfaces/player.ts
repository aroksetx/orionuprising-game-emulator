import {Deck} from './deck';
import {Fraction} from './fraction';

export enum ResourceType {
    SCIENCE,
    MILITARY,
    PRODUCTION,
    MONEY,
}

export interface HomePlanet {
    activationKey: number;
    guaranteedIncome: number;
    additionalIncome: number;
    resourceType: ResourceType;
}

interface NeutralPlanet {

}

export class Player {
    name: string;
    fraction: Fraction;
    hero: Fraction;

    resources: {
        since: number;
        army: number;
        money: number;
    };
    deck: Deck;

    homePlanets: HomePlanet[];
    capturedPlanets: NeutralPlanet[];
}